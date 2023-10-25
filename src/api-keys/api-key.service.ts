import { Injectable } from '@nestjs/common';
import { ApiKeyRepository } from './api-key.repository';
import {
  CreateApiKeyServiceDto,
  ApiKey,
  GetApiKeyDto,
  UpdateApiKeyDto,
} from './api-key';
import { ApiKeyNotFound } from './api-key.error';

@Injectable()
export class ApiKeyService {
  static getProviders() {
    return [ApiKeyService];
  }

  constructor(private apiKeyRepository: ApiKeyRepository) {}

  private generateKey(length: number): string {
    const charset =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let apiKey = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      apiKey += charset.charAt(randomIndex);
    }

    return apiKey;
  }

  public async createApiKey(args: CreateApiKeyServiceDto): Promise<ApiKey> {
    const apiKey = this.generateKey(32);
    return await this.apiKeyRepository.create({
      key: apiKey,
      companyId: args.companyId,
    });
  }

  public deleteApiKey(): void {
    throw new Error('Method not implemented.');
  }

  public async getApiKey(args: GetApiKeyDto): Promise<ApiKey> {
    const data = await this.apiKeyRepository.findOne({
      companyId: args.companyId,
    });

    if (!data) throw new ApiKeyNotFound({ companyId: args.companyId });
    return data;
  }

  public getApiKeys(): void {
    throw new Error('Method not implemented.');
  }

  public async updateApiKey(args: UpdateApiKeyDto): Promise<ApiKey> {
    const apiKey = this.generateKey(32);

    return await this.apiKeyRepository.update({
      id: args.id,
      key: apiKey,
    });
  }
}
