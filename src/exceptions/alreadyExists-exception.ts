import { HttpException } from './http-exception';

export class UserExistsException extends HttpException {
  constructor(message: string = 'User already exists!! Please use another email.') {
    super(400, message);
  }
}