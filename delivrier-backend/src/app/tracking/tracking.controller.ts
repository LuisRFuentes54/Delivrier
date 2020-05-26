import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TrackingService } from "./tracking.service";

@Controller('tracking')
export class TrackingController {
  constructor(
    private readonly trackingService: TrackingService,
  ) {}

  @Get('/:numberTrack')
  @UseGuards(AuthGuard('jwt'))
  authorizeLogin(@Param('numberTrack') numberTrack: number) {
    return this.trackingService.getShippingByTrackingNumber(numberTrack);
  }
}