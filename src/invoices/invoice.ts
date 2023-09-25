export interface Invoice {
  id: number;
  title: string;
  description: string;
  from?: CompanyAddress;
  to?: CompanyAddress;
  items?: InvoiceItem[];
  total?: number;
  totalVat?: number;
  dueDate?: Date;
  currency: string;
  vatRate: number;
  iban?: string;
  bic?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CompanyAddress {
  name: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

export interface InvoiceItem {
  name: string;
  description: string;
  quantity: number;
  priceVat: number;
  total: number;
}

export interface CreateInvoiceDto {
  title: string;
  from?: CompanyAddress;
  to?: CompanyAddress;
  items?: InvoiceItem[];
  totalVat?: number;
  dueDate?: Date;
  currency: string;
  vatRate: number;
}
