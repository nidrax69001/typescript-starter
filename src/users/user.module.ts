import { Module } from '@nestjs/common';
import { UserRepositoryImpl } from './user.repository.impl';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService, ...UserRepositoryImpl.getProviders()],
  imports: [],
})
export class UserModule {}
