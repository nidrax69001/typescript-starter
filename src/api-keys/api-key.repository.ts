import {
  ApiKey,
  CreateApiKeyDto,
  GetApiKeyDto,
  UpdateApiKeyDto,
} from './api-key';
export abstract class ApiKeyRepository {
  abstract create(args: CreateApiKeyDto): Promise<ApiKey>;
  abstract findAll(): ApiKey[];
  abstract findOne(args: GetApiKeyDto): Promise<ApiKey>;
  abstract update(args: UpdateApiKeyDto): Promise<ApiKey>;
  abstract remove(id: number): void;
}
