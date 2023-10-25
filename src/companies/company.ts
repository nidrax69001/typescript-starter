export interface Company {
  id: number;
  name: string;
  address: string;
  city: string;
  state?: string;
  zip: string;
  phone?: string;
  email: string;
  country: string;
}

export interface CreateCompanyDto {
  name: string;
  address: string;
  city: string;
  zip: string;
  phone?: string;
  email: string;
  country: string;
  userId: number;
}
