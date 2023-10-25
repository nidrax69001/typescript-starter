import { ErrorWithCause } from 'src/errors';

export class ApiKeyNotFound extends ErrorWithCause {
  name = ApiKeyNotFound.name;

  constructor({ cause, companyId }: { cause?: unknown; companyId: number }) {
    super(`ApiKeyNotFound on company ${companyId}`, { cause });
  }
}
