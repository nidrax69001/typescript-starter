import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { ApiKeyService } from './api-key.service';
import { CreateApiKeyServiceDto } from './api-key';

@Controller()
export class ApiKeyController {
  constructor(private apiKeyService: ApiKeyService) {}
  @Post()
  async createApiKey(@Body() args: CreateApiKeyServiceDto) {
    return await this.apiKeyService.createApiKey(args);
  }

  @Get('company/:companyId/api-keys')
  async getApiKey(@Param('companyId') companyId: number) {
    return await this.apiKeyService.getApiKey({
      companyId,
    });
  }

  @Put('api-keys/:id')
  async updateApiKey(@Param('id') id: number, @Body() args: any) {
    return await this.apiKeyService.updateApiKey({
      id,
      key: args.key,
    });
  }
}
