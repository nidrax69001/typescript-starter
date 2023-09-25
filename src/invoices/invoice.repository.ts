import { CreateInvoiceDto, Invoice } from './invoice';

export abstract class InvoiceRepository {
  abstract create(args: CreateInvoiceDto): Promise<Invoice>;
  abstract findAll(): Invoice[];
  abstract findOne(id: number): Invoice;
  abstract update(id: number, updateInvoiceDto: Invoice): Invoice;
  abstract remove(id: number): Invoice;
}
