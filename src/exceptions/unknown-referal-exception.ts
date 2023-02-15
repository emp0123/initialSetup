import { HttpException } from './http-exception';

export class unknownReferalException extends HttpException {
  constructor(message: string = 'This referral id does not exist !!') {
    super(400, message);
  }
}