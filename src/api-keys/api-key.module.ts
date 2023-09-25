import { Module } from '@nestjs/common';
import { ApiKeyController } from './api-key.controller';
import { ApiKeyService } from './api-key.service';
import { ApiKeyRepositoryImpl } from './api-key.repository.impl';

@Module({
  controllers: [ApiKeyController],
  providers: [ApiKeyService, ...ApiKeyRepositoryImpl.getProviders()],
  imports: [],
})
export class ApiKeyModule {}
