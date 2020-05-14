import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from '../../entities/user.entity';
import { Logger } from 'winston';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @Inject('winston')
    private readonly logger: Logger,
  ){}

  async getUserByUsername (name: string): Promise<User>{
    const user : User[] = await this.userRepository.find({
      where: { username: name },
      relations: ['personClient']
    });
    return user[0];
  }
}
