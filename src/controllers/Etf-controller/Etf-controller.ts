import { NextFunction, Request, Response } from 'express';
import { insertEtfData } from "../../services/Etf-services/Etfservices";

export const etfController = {
  addApiData: async (request: Request, response: Response, next: NextFunction) => {
    try {
      const result = await insertEtfData.addEtfData();
      response.json(result)
    } catch (e) {
      next(e);
    }
  }
}