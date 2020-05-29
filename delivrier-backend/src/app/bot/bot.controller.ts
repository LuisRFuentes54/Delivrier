import { BotService } from './bot.service';
import { Get, Controller, Res, HttpStatus, HttpService } from '@nestjs/common';

@Controller()
export class BotController {
  constructor(private readonly botService: BotService, private httpService: HttpService) {}

  @Get()
  getBotDialog(@Res() res) {
    this.botService.botMessage();
    res.status(HttpStatus.OK).send("Bot service started");
  }
}
