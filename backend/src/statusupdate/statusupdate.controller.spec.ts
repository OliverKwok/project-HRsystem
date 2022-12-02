import { Test, TestingModule } from '@nestjs/testing';
import { StatusupdateController } from './statusupdate.controller';
import { StatusupdateService } from './statusupdate.service';

describe('StatusupdateController', () => {
  let controller: StatusupdateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatusupdateController],
      providers: [StatusupdateService],
    }).compile();

    controller = module.get<StatusupdateController>(StatusupdateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
