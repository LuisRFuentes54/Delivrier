import { Controller, UseGuards, Get } from '@nestjs/common';
import { PackingService } from './packing.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('packing')
@UseGuards(AuthGuard('jwt'))
export class PackingController {
  constructor(
    private readonly packingService: PackingService,
  ) {}

  @Get('/getAll')
  findAll(){
    return this.packingService.getAllPackings();
  }
}
