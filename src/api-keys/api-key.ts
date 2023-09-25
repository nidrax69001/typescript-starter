export interface ApiKey {
  id: number;
  key: string;
  createdAt: Date;
  updatedAt: Date;
  companyId: number;
}

export interface CreateApiKeyDto {
  key: string;
  companyId: number;
}

export interface CreateApiKeyServiceDto {
  companyId: number;
}

export interface GetApiKeyDto {
  companyId: number;
}

export interface UpdateApiKeyDto {
  id: number;
  key: string;
}
