import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { CreateInfo } from '../dto/createInfo.dto';
import { UserService } from '../app/user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('authorize')
  @UseGuards(AuthGuard('local'))
  authorizeLogin(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('user/signup')
  register(@Body() info: CreateInfo) {
    return this.authService.create(info);
  }

  @Post('/authorize/google')
  authorizeLoginGoogle(@Body() info) {
    return this.authService.validateUserFirebase(info.email);
  }

  @Post('/authorize/facebook')
  authorizeLoginFacebook(@Body() info) {
    return this.authService.validateUserFirebase(info.email);
  }
}
