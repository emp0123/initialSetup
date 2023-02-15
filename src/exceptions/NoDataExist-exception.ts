import { HttpException } from './http-exception';

export class NoDataExistException extends HttpException {
  constructor(message: string = 'No data exist') {
    super(400, message);
  }
}
