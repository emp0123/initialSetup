import { HttpException } from './http-exception';

export class multipleStudyNamePresentException extends HttpException {
  constructor(message: string = 'This study name does not exist !!') {
    super(400, message);
  }
}