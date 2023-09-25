export class ErrorWithCause extends Error {
  errorCause: unknown;

  constructor(message: string, { cause }: { cause: unknown }) {
    super(message);
    /* @todo pass cause to super
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error#rethrowing_an_error_with_a_cause */
    this.errorCause = cause;
  }
}
