import { Test, TestingModule } from '@nestjs/testing';
import { ShippingTypeService } from './shipping-type.service';

describe('ShippingTypeService', () => {
  let service: ShippingTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShippingTypeService],
    }).compile();

    service = module.get<ShippingTypeService>(ShippingTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
