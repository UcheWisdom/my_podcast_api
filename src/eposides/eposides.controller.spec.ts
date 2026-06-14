import { Test, TestingModule } from '@nestjs/testing';
import { EposidesController } from './eposides.controller';

describe('EposidesController', () => {
  let controller: EposidesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EposidesController],
    }).compile();

    controller = module.get<EposidesController>(EposidesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
