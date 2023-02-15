import { NextFunction, Request, Response } from 'express';
import { authService } from '../services/auth-service';

export const authController = {
  login: async (request: Request, response: Response, next: NextFunction) => {
    try {
      const result = await authService.login(request.body.email as string, request.body.password as string);
       response.cookie("access_token", result.access_token, {
        httpOnly: true
      });
      response.json(result);
    } catch (e) {
      next(e);
    }
  },
};
