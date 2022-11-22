import { Test, TestingModule } from '@nestjs/testing';
import { TitleService } from './title.service';

describe('TitleService', () => {
  let service: TitleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TitleService],
    }).compile();

    service = module.get<TitleService>(TitleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
