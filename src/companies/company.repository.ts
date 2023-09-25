import { Company, CreateCompanyDto } from './company';

export abstract class CompanyRepository {
  abstract create(args: CreateCompanyDto): Promise<Company>;
  abstract delete(id: number): Promise<void>;
}
