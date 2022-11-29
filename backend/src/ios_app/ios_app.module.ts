import { Module } from '@nestjs/common';
import { IosAppService } from './ios_app.service';
import { IosAppController } from './ios_app.controller';

@Module({
  controllers: [IosAppController],
  providers: [IosAppService]
})
export class IosAppModule {}
