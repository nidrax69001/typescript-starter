import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  static getProviders() {
    return [PrismaService];
  }
  async onModuleInit() {
    await this.$connect();
  }
}
