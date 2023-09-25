export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  companyId: number;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDto {
  name: string;
  email: string;
  password?: string;
  role?: string;
  facebookId?: string;
  lastName?: string;
}

export interface UpdateUserDto {
  id: number;
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  facebookId?: string;
  lastName?: string;
  companyId?: number;
}
