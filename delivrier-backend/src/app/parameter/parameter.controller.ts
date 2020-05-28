import { Controller, UseGuards, Get } from '@nestjs/common';
import { ParameterService } from './parameter.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('parameter')
@UseGuards(AuthGuard('jwt'))
export class ParameterController {
  constructor(
    private readonly parameterService: ParameterService,
  ) {}

  @Get('/getAll')
  findAll(){
    return this.parameterService.getAllParameters();
  }
}
