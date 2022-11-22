import { Module } from '@nestjs/common';
import { TitleService } from './title.service';
import { TitleController } from './title.controller';

@Module({
  controllers: [TitleController],
  providers: [TitleService]
})
export class TitleModule {}
