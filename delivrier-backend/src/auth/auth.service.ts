import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { UserService } from '../app/user/user.service';
import { User } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Logger } from 'winston';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
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
        this.logger.error(`Hubo un problema mientras el usuario [${username}] trataba de ingresar`);
        return null;
      }
    }
    this.logger.error(`Hubo un problema mientras el usuario [${username}] trataba de ingresar`);
    return null;
  }

  /**
   * Firma el JWT para que el usuario pueda ingresar a la aplicación
   *
   * @param   {Partial<User>}           user      información de usuario que intenta ingresa
   *
   * @return  {}                           información del usuario más el token de acceso
   */
  async login(user: Partial<User>) {
    this.logger.info(`Generando el token al usuario [${user.username}]`)
    const payload = { id: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
      user: user
    };
  }
}
