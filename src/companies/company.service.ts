import { Injectable } from '@nestjs/common';
import { CompanyRepository } from './company.repository';
import { CreateCompanyDto } from './company';
import { UserService } from 'src/users/user.service';
import { UserAlreadyHaveACompany } from '../users/user.error';
import { PrismaError } from './company.error';

@Injectable()
export class CompanyService {
  static getProviders() {
    return [CompanyService];
  }
  constructor(
    private companyRepository: CompanyRepository,
    private readonly userService: UserService,
  ) {}

  async createCompany(args: CreateCompanyDto) {
    const user = await this.userService.findUserById(args.userId);
    let company = null;

    if (user.companyId) {
      throw new UserAlreadyHaveACompany({ email: user.email });
    } else {
      company = await this.companyRepository.create(args);
    }

    try {
      await this.userService.updateUser({
        companyId: company.id,
        id: args.userId,
      });
    } catch (err) {
      // remove company if user update fails
      await this.companyRepository.delete(company.id);
      throw new PrismaError(err);
    }
  }
}
