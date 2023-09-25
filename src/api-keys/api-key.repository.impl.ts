import { PrismaService } from 'src/prisma';
import {
  ApiKey,
  CreateApiKeyDto,
  GetApiKeyDto,
  UpdateApiKeyDto,
} from './api-key';
import { ApiKeyRepository } from './api-key.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiKeyRepositoryImpl implements ApiKeyRepository {
  static getProviders() {
    return [
      ApiKeyRepositoryImpl,
      {
        provide: ApiKeyRepository,
        useExisting: ApiKeyRepositoryImpl,
      },
      PrismaService,
    ];
  }
  constructor(private prismaService: PrismaService) {}

  async create(args: CreateApiKeyDto): Promise<ApiKey> {
    return await this.prismaService.apiKey.create({
      data: {
        ...args,
      },
    });
  }
  findAll(): ApiKey[] {
    throw new Error('Method not implemented.');
  }
  async findOne(args: GetApiKeyDto): Promise<ApiKey> {
    return await this.prismaService.apiKey.findUnique({
      where: {
        id: +args.companyId,
      },
    });
  }
  async update(args: UpdateApiKeyDto): Promise<ApiKey> {
    return await this.prismaService.apiKey.update({
      data: {
        key: args.key,
      },
      where: {
        id: +args.id,
      },
    });
  }
  remove(id: number): void {
    throw new Error('Method not implemented.');
  }
}
