import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CompanyRepositoryImpl } from './company.repository.impl';
import { UserService } from 'src/users/user.service';
import { UserRepositoryImpl } from 'src/users/user.repository.impl';

@Module({
  controllers: [CompanyController],
  providers: [
    CompanyService,
    ...CompanyRepositoryImpl.getProviders(),
    UserService,
    ...UserRepositoryImpl.getProviders(),
  ],
  imports: [],
})
export class CompanyModule {}
