import { Controller, UseGuards, Get, Request, Param} from '@nestjs/common';
import { UserService } from "./user.service";
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get('/contacts/:userId')
  getPersonDestinatary(@Request() req, @Param('userId') userId: number){
    return this.userService.getPersonDestinatary(userId);
  }

  @Get('/shippings/:userId')
  getshippings(@Param('userId') userId: number){
    return this.userService.getUserShippings(userId)
  }
}
