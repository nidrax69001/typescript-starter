import { Controller, Post } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { FacturXService } from './factur-x.service';
import { PdfService } from './pdf.service';

@Controller()
export class InvoiceController {
  constructor(private pdfService: PdfService) {}

  @Post('invoices')
  async createInvoice() {
    return await this.pdfService.createPdf();
  }
}
