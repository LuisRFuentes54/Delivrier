import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Logger } from 'winston';
import { UserService } from '../app/user/user.service';
import { EmailService } from "../email/email.service";
import { User } from '../entities/user.entity';
import { CreateInfo } from "../dto/createInfo.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly emailService: EmailService,
    private readonly jwtService: JwtService,
    @Inject('winston')
    private readonly logger: Logger,
  ) {}

  /**
   * Valida que el usuario exista, y si existe verifica si se ingreso la contraseña correcta para este usuario
   *
   * @param   {string}           username  nombre de usuario que intenta ingresar
   * @param   {string}           password  contraseña ingresada para accerder con el usuario dado
   *
   * @return  {Promise<User>}              información del usuario que esta ingresando
   */
  async validateUser(username: string, password: string): Promise<User>{
    this.logger.info(`[AuthService] Validating user login [${username}]`)
    const user : User = await this.usersService.getUserByUsername(username);
    if (user){
      if(user.password === password)
        return user;
      else{
        this.logger.error(`[AuthService] There was a problem while the user [${username}] was trying to enter, the password entered is not correct`);
        return null;
      }
    }
    this.logger.error(`[AuthService] There was a problem while the user [${username}] was trying to enter, the username is not registered`);
    return null;
  }

  /**
   * Firma el JWT para que el usuario pueda ingresar a la aplicación
   *
   * @param   {Partial<User>}           user      información de usuario que intenta ingresa
   *
   * @return  {}                           información del usuario más el token de acceso
   */
  login(user: Partial<User>) {
    this.logger.info(`[AuthService] Generating the token to the user [${user.username}]`)
    const payload = { id: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
      user: user
    };
  }

  async create(info: CreateInfo) {
    await this.usersService.createUser(info);
    await this.emailService.sendWelcomeEmail(info.email, info.user.username);
    return this.login(await this.usersService.getUserByUsername(info.user.username));
  }

  async validateUserFirebase(email: string) {
    this.logger.info(`[AuthService] Validating the entry to the system from federated login`)
    const user : User = await this.usersService.getUserByEmail(email);
    if (user){
      this.logger.info(`[AuthService] Validated user login [${user.username}] from federated login`);
      return this.login(user);
    }
    else{
      this.logger.error(`[AuthService] The user who tried to enter by federated login was not registered in the system`);
      throw new UnauthorizedException();return null;
    }
  }
}
