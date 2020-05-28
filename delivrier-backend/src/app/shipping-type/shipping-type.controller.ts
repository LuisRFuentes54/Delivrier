import { Controller, UseGuards, Get } from '@nestjs/common';
import { ShippingTypeService } from './shipping-type.service';
import { AuthGuard } from '@nestjs/passport';
@Controller('shipping-type')
@UseGuards(AuthGuard('jwt'))
export class ShippingTypeController {
  constructor(
    private readonly shippingTypeService: ShippingTypeService,
  ) {}

  @Get('/getAll')
  findAll(){
    return this.shippingTypeService.getAllShippingTypes();
  }
}
