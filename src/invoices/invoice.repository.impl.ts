import { PrismaService } from 'src/prisma';
import { CreateInvoiceDto, Invoice } from './invoice';
import { InvoiceRepository } from './invoice.repository';

export class InvoiceRepositoryImpl implements InvoiceRepository {
  static getProviders() {
    return [
      InvoiceRepositoryImpl,
      {
        provide: InvoiceRepository,
        useExisting: InvoiceRepositoryImpl,
      },
    ];
  }

  constructor(private prismaService: PrismaService) {}

  async create(args: CreateInvoiceDto): Promise<Invoice> {
    throw new Error('Method not implemented.');
  }
  findAll(): Invoice[] {
    throw new Error('Method not implemented.');
  }
  findOne(id: number): Invoice {
    throw new Error('Method not implemented.');
  }
  update(id: number, updateInvoiceDto: Invoice): Invoice {
    throw new Error('Method not implemented.');
  }
  remove(id: number): Invoice {
    throw new Error('Method not implemented.');
  }
}
