import { HttpException } from "./http-exception";
export class AlreadyExistsException extends HttpException{
  constructor(message:string = 'Already Exist!!'){
    super(400,message)
  }
}