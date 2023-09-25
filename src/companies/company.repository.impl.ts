import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Company, CreateCompanyDto } from './company';
import { CompanyRepository } from './company.repository';

@Injectable()
export class CompanyRepositoryImpl implements CompanyRepository {
  static getProviders() {
    return [
      CompanyRepositoryImpl,
      {
        provide: CompanyRepository,
        useExisting: CompanyRepositoryImpl,
      },
      PrismaService,
    ];
  }

  constructor(private prismaService: PrismaService) {}

  private convertToCompany(data: any): Company {
    return {
      id: data.id,
      name: data.name,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      phone: data.phone,
      email: data.email,
      country: data.country,
    };
  }

  async create(args: CreateCompanyDto): Promise<Company> {
    const data = await this.prismaService.company.create({
      data: {
        city: args.city,
        country: args.country,
        address: args.address,
        name: args.name,
        billingEmail: args.email,
        zipCode: args.zip,
        phone: args.phone,
        state: args.state || undefined,
      },
    });

    return this.convertToCompany(data);
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.company.delete({
      where: {
        id,
      },
    });
  }
}
