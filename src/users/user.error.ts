import { ErrorWithCause } from 'src/errors';

export class UserNotFound extends ErrorWithCause {
  name = UserNotFound.name;

  constructor({ cause, email }: { cause?: unknown; email: string }) {
    super(`User with "${email}" not found`, { cause });
  }
}

export class UserAlreadyExists extends ErrorWithCause {
  name = UserAlreadyExists.name;

  constructor({ cause, email }: { cause?: unknown; email: string }) {
    super(`User with email "${email}" already exists`, { cause });
  }
}

export class UserAlreadyHaveACompany extends ErrorWithCause {
  name = UserAlreadyHaveACompany.name;

  constructor({ cause, email }: { cause?: unknown; email: string }) {
    super(`User with "${email}" has already a company`, { cause });
  }
}
