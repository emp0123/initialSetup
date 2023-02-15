import { NextFunction, Request, Response } from 'express';
import { EtfListService } from '../../services/EtfList-services/EtfList-services';

export const etfDataController = {
  getEtfList: async (request: Request, response: Response, next: NextFunction) => {
    try {
      const result = await EtfListService.getEtfList();
      response.json(result);
    } catch (e) {
      next(e);
    }
  },
};
