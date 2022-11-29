import { Test, TestingModule } from '@nestjs/testing';
import { IosAppService } from './ios_app.service';

describe('IosAppService', () => {
  let service: IosAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IosAppService],
    }).compile();

    service = module.get<IosAppService>(IosAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
