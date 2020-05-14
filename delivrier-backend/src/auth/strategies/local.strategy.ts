import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Logger } from 'winston';
import { User } from "../../entities/user.entity";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    @Inject('winston')
    private readonly logger: Logger,
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<User> {
    const user : User = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}