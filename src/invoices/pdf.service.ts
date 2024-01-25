import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as PDFDocument from 'pdfkit';

@Injectable()
export class PdfService {
  static getProviders() {
    return [PdfService];
  }
  async createPdf(): Promise<void> {
    const doc = new PDFDocument();

    doc.pipe(
      fs.createWriteStream(path.join(__dirname, '../assets/factur-x-test.pdf')),
    );
    doc.text('New PDF');

    const xmlInvoiceFile = {
      src: path.join(__dirname, '../assets/factur-x-test.xml'),
      name: 'factur-x-test.xml',
      description: 'Factur-X test file',
    };

    doc.file(path.join(xmlInvoiceFile.src), {
      name: xmlInvoiceFile.name,
      description: xmlInvoiceFile.description,
      creationDate: new Date(),
      modificationDate: new Date(),
    });

    doc.end();
  }
}
