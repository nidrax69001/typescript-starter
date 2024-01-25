import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { PdfService } from './pdf.service';
@Module({
  controllers: [InvoiceController],
  providers: [PdfService],
  imports: [],
})
export class InvoiceModule {}
