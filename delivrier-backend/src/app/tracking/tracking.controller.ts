import { Controller, UseGuards, Get, Param, UseInterceptors, UploadedFile, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { TrackingService } from './tracking.service';

@Controller('tracking')
export class TrackingController {
  constructor(
    private readonly trackingService: TrackingService,
  ) {}

  @Get('/:numberTrack')
//@UseGuards(AuthGuard('jwt'))
  getShippingInfo(@Param('numberTrack') numberTrack: number) {
    return this.trackingService.getShippingByTrackingNumber(numberTrack);
  }

  @Get('/status/:numberTrack')
  getShippingStatus(@Param('numberTrack') numberTrack: number) {
    return this.trackingService.getShippingStatusInfoByNumber(numberTrack)
  }

  @Post('pdf/:numberTrack')
  @UseInterceptors(FileInterceptor('file'))
  sendInvoiceEmail(@UploadedFile() file, @Param('numberTrack') numberTrack: number) {
    this.trackingService.sendInvoiceByEmail(numberTrack,file);
  }
}
