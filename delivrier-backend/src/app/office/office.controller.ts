import { Controller, UseGuards, Get } from '@nestjs/common';
import { OfficeService } from './office.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('office')
@UseGuards(AuthGuard('jwt'))
export class OfficeController {
  constructor(
    private readonly officeService: OfficeService,
  ) {}

  @Get('/getAll')
  findAll(){
    return this.officeService.getAllOffices();
  }
}
