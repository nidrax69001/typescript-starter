import { InvoiceRepository } from './invoice.repository';
import { Injectable } from '@nestjs/common';
import { Invoice, CreateInvoiceDto } from './invoice';

@Injectable()
export class InvoiceService {
  constructor(private invoiceRepository: InvoiceRepository) {}

  public create(args: CreateInvoiceDto): Promise<Invoice> {
    return this.invoiceRepository.create(args);
  }

  public generateInvoicePdf(): void {
    throw new Error('Method not implemented.');
  }

  public setLineItem(): void {
    throw new Error('Method not implemented.');
  }

  public setFromAddress(): void {
    throw new Error('Method not implemented.');
  }

  public setToAddress(): void {
    throw new Error('Method not implemented.');
  }

  public setInvoiceDueDate(): void {
    throw new Error('Method not implemented.');
  }

  public setMetaData(): void {
    throw new Error('Method not implemented.');
  }
}
