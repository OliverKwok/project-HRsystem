import { Test, TestingModule } from '@nestjs/testing';
import { StatusupdateService } from './statusupdate.service';

describe('StatusupdateService', () => {
  let service: StatusupdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatusupdateService],
    }).compile();

    service = module.get<StatusupdateService>(StatusupdateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
