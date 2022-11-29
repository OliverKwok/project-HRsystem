import { Test, TestingModule } from '@nestjs/testing';
import { IosAppController } from './ios_app.controller';
import { IosAppService } from './ios_app.service';

describe('IosAppController', () => {
  let controller: IosAppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IosAppController],
      providers: [IosAppService],
    }).compile();

    controller = module.get<IosAppController>(IosAppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
