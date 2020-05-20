import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { SendGridService } from "@anchan828/nest-sendgrid";
import { JwtService } from '@nestjs/jwt';
import { Logger } from 'winston';
import { UserService } from '../app/user/user.service';
import { EmailService } from "../email/email.service";
import { User } from '../entities/user.entity';
import { CreateInfo } from "../dto/createInfo.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly sendGrid: SendGridService,
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
    this.logger.info(`Validando entrada al usuario [${username}]`)
    const user : User = await this.usersService.getUserByUsername(username);
    if (user){
      if(user.password === password)
        return user;
      else{
        this.logger.error(`Hubo un problema mientras el usuario [${username}] trataba de ingresar, la contraseña ingresada no es correcta`);
        return null;
      }
    }
    this.logger.error(`Hubo un problema mientras el usuario [${username}] trataba de ingresar, el nombre de usuario no esta registrado`);
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
    this.logger.info(`Generando el token al usuario [${user.username}]`)
    const payload = { id: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
      user: user
    };
  }

  async create(info: CreateInfo) {
    await this.usersService.createUser(info);
    await this.emailService.sendWelcomeEmail(info.email);
    return this.login(await this.usersService.getUserByUsername(info.user.username));
  }

  async validateUserFirebase(email: string) {
    this.logger.info(`Validando la entrada al sistema desde login federado`)
    const user : User = await this.usersService.getUserByEmail(email);
    if (user){
      this.logger.info(`Validada la entrada del usuario [${user.username}] por login federado`);
      return this.login(user);
    }
    else{
      this.logger.error(`El usuario que trato de ingresar por login federado no estaba registrado en el sistema`);
      throw new UnauthorizedException();return null;
    }
  }
}
