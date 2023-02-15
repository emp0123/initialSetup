import { HttpException } from './http-exception';

export class UnsubscribeBadCredentialException extends HttpException {
  constructor(message: string = 'The user is not found') {
    super(400, message);
  }
}