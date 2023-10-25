import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  BadRequestException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ApiKeyService } from './api-key.service';
import { CreateApiKeyServiceDto } from './api-key';
import { ApiKeyNotFound } from './api-key.error';

@Controller()
export class ApiKeyController {
  constructor(private apiKeyService: ApiKeyService) {}

  @Post('api-keys')
  async createApiKey(@Body() args: CreateApiKeyServiceDto) {
    try {
      return await this.apiKeyService.createApiKey(args);
    } catch (error) {
      throw new BadRequestException({ errorCode: 'API_KEY_CREATE_ERROR' });
    }
  }

  @Get('companies/:companyId/api-keys')
  async getApiKey(@Param('companyId') companyId: number) {
    try {
      return await this.apiKeyService.getApiKey({
        companyId,
      });
    } catch (error) {
      if (error instanceof ApiKeyNotFound) {
        throw new NotFoundException({
          errorCode: 'API_KEY_NOT_FOUND',
        });
      }
      throw error;
    }
  }

  @Put('api-keys/:id')
  async updateApiKey(@Param('id') id: number, @Body() args: any) {
    return await this.apiKeyService.updateApiKey({
      id,
      key: args.key,
    });
  }
}
