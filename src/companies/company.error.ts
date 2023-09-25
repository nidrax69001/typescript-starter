import { ErrorWithCause } from 'src/errors';

export class PrismaError extends ErrorWithCause {
  name = PrismaError.name;

  constructor({ cause }: { cause?: unknown }) {
    super(`Prisma error`, { cause });
  }
}
