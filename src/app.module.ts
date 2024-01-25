import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiKeyModule } from './api-keys/api-key.module';
import { UserModule } from './users/user.module';
import { CompanyModule } from './companies/company.module';
import { InvoiceModule } from './invoices/invoice.module';
@Module({
  imports: [ApiKeyModule, UserModule, CompanyModule, InvoiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
