import { HttpException } from './http-exception';

export class ErrorWhileRegisteringException extends HttpException {
  constructor(message: string = 'Unable to register !! Please try again.') {
    super(400, message);
  }
}