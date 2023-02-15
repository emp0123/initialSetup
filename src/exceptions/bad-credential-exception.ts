import { HttpException } from './http-exception';

export class BadCredentialException extends HttpException {
  constructor(message: string = 'Invalid Credentials!') {
    super(400, message);
  }
}