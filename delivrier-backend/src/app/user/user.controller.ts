import { Controller, UseGuards, Get } from '@nestjs/common';
import { UserService } from "./user.service";
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(
    private readonly usersService: UserService,
  ) {}
}
