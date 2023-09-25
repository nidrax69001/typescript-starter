import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './company';
import { UserAlreadyHaveACompany } from 'src/users/user.error';

@Controller()
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Post('companies')
  async createCompany(@Body() args: CreateCompanyDto) {
    try {
      return await this.companyService.createCompany({
        ...args,
      });
    } catch (err) {
      if (err instanceof UserAlreadyHaveACompany) {
        throw new UnprocessableEntityException({
          errorCode: 'USER_ALREADY_HAVE_A_COMPANY',
        });
      } else {
        throw new BadRequestException({ errorCode: 'BAD_REQUEST' });
      }
    }
  }
}
