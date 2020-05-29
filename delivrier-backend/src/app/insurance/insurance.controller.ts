
import { Controller, UseGuards, Get } from '@nestjs/common';
import { InsuranceService } from './insurance.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('insurance')
@UseGuards(AuthGuard('jwt'))
export class InsuranceController {
  constructor(
    private readonly insuranceService: InsuranceService,
  ) {}

  @Get('/getAll')
  findAll(){
    return this.insuranceService.getAllInsurances();
  }
}
