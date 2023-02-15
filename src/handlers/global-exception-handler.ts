import { HttpException } from '../exceptions/http-exception';
import { NextFunction, Request, Response } from 'express';

export const globalExceptionHander = (error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof HttpException) {
    const { status, message } = error;
    response.status(status).json({
      status,
      message,
    });
  } else {
    //log the error, notify admin:  Serious Issue
    console.log(error)
    response.status(500).json({
      status: 500,
      message: 'An error occured, try again later!',
    });
  }
};
