import { HttpException } from './http-exception';

export class SomthingWentWrongException extends HttpException {
  constructor(message: string = 'Something Went Wrong') {
    super(400, message);
  }
}