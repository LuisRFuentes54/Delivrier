import { Test, TestingModule } from '@nestjs/testing';
import { PackingController } from './packing.controller';

describe('Packing Controller', () => {
  let controller: PackingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackingController],
    }).compile();

    controller = module.get<PackingController>(PackingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
