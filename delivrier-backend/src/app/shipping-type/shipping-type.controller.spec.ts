import { Test, TestingModule } from '@nestjs/testing';
import { ShippingTypeController } from './shipping-type.controller';

describe('ShippingType Controller', () => {
  let controller: ShippingTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShippingTypeController],
    }).compile();

    controller = module.get<ShippingTypeController>(ShippingTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
