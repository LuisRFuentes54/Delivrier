import { Controller, UseGuards, Post, Get, Body } from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateShipping } from '../../dto/createShipping.dto';

@Controller('shipping')
@UseGuards(AuthGuard('jwt'))
export class ShippingController {
  constructor(
    private readonly shippingService: ShippingService,
  ) {}

  @Get('/getDelay')
  getShippingTimeConfig(){
    return this.shippingService.getShippingSimulationDelay();
  }

  @Post('/create')
  createShipping(@Body() shipping: CreateShipping){
    return this.shippingService.createShipping(shipping);
  }
}
