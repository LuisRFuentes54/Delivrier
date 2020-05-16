import { Injectable, Inject, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, getManager } from 'typeorm';
import { User } from '../../entities/user.entity';
import { PersonClient } from "../../entities/personClient.entity";
import { Role } from "../../entities/role.entity";
import { Status } from "../../entities/status.entity";
import { UserStatus } from "../../entities/userStatus.entity";
import { Logger } from 'winston';
import { CreateInfo } from "../../dto/createInfo.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(PersonClient)
    private personClientRepository: Repository<PersonClient>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
    @Inject('winston')
    private readonly logger: Logger,
  ){}

  async getUserByUsername (name: string): Promise<User>{
    const user : User = await this.userRepository.findOne({
      where: { username: name },
      relations: ['personClient']
    });
    return user;
  }

  async thisEmailIsInUse(sendEmail: string): Promise<boolean>{
    const personClient : PersonClient = await this.personClientRepository.findOne({
      where: { email: sendEmail }
    });
    if(personClient)
      return true;
    else
      return false;
  }

  async thisUsernameIsInUse(sendUsername: string): Promise<boolean>{
    const user : User = await this.userRepository.findOne({
      where: { username: sendUsername }
    });
    if(user)
      return true;
    else
      return false;
  }

  async getRoleByName(roleName: string): Promise<Role> {
    const role : Role = await this.roleRepository.findOne({
      where: { name: roleName }
    });
    return role;
  }

  async getStatusByName(statusName: string): Promise<Status> {
    const status : Status = await this.statusRepository.findOne({
      where: { name: statusName }
    });
    return status;
  }

  async createPersonUser(user: Partial<User>, personID, roleName: string, transactionalEntityManager): Promise<number>{
    const userTransactionRepository: Repository<User> = transactionalEntityManager.getRepository(
      User,
    );
    user.personClient = personID;
    user.role = await this.getRoleByName(roleName);
    const newUser = await userTransactionRepository.save(user);
    return newUser.id;
  }

  async deletePersonClient(emailDelete: string): Promise<void>{
    this.personClientRepository.delete({ email: emailDelete });
  }

  async createStatusUser(userStatus: Partial<UserStatus>,newUserID: number, statusName: string, transactionalEntityManager): Promise<void>{
    const userStatusTransactionRepository: Repository<UserStatus> = transactionalEntityManager.getRepository(
      UserStatus,
    );
    const userTransactionRepository: Repository<User> = transactionalEntityManager.getRepository(
      User,
    );
    userStatus.user = await userTransactionRepository.findOne(newUserID);
    userStatus.status = await this.getStatusByName(statusName);
    userStatus.date = new Date().toJSON();
    await userStatusTransactionRepository.save(userStatus);
  }
  
  /**
   * Metodo que crea a la PersonaCliente y al Usuario, además de asignarle al Usuario sus respectivas relaciones con Rol y Estatus
   * @param   {CreateInfo}           info      información del usuario que se intenta crear
   *
   */
  async createUser(info: CreateInfo): Promise<void> {
    this.logger.info(`Validando la información para crear al usuario [${info.user.username}]`);
    if(!(await this.thisEmailIsInUse(info.email))){
      if(!(await this.thisUsernameIsInUse(info.user.username))){
        this.logger.info(`Creando al usuario [${info.user.username}]`);
        return await getManager().transaction(async transactionalEntityManager => {
                try{
                  const newPerson = {
                    firstName: info.firstName,
                    secondName: info.secondName,
                    firstLastName: info.firstLastName,
                    secondLastName: info.secondLastName,
                    phoneNumber: info.phoneNumber,
                    email: info.email,
                    birthDate: info.birthDate,
                    identNum: info.identNum,
                    photo: "None"
                  };
                  const insertedPerson : PersonClient = await this.personClientRepository.save(newPerson);
                  const newUserID = await this.createPersonUser(info.user,insertedPerson.id,'User',transactionalEntityManager);
                  await this.createStatusUser({},newUserID,'Active',transactionalEntityManager);
                }
                catch(ex){
                  this.logger.error(`No se pudo crear el usuario [${info.email}], ocurrio un error inesperado | Exception: ex=${ex}`);
                  if(this.thisEmailIsInUse(info.email))
                    this.deletePersonClient(info.email);
                  throw new InternalServerErrorException(`Error en la creación de la persona [nombre=${info.firstName}|apellido=${info.firstLastName}`);
                }
        })
      }
      else{
        this.logger.error(`No se puede crear el usuario, el nombre de usuario [${info.user.username}] ya esta usado`);
        throw new UnauthorizedException("The username is already in use in Delivrier");
      }
    }
    else{
      this.logger.error(`No se puede crear el usuario, el correo [${info.email}] ya esta usado`);
      throw new UnauthorizedException("The email is already in use in Delivrier");
    }
  }
}