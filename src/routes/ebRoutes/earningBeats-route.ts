import express, { Request, Response } from 'express';
import { etfController } from '@/controllers/Etf-controller/Etf-controller';
import { etfDataController } from '@/controllers/EtfDataTable/EtfDataList';

const router = express.Router();

router.get('/', (request: Request, response: Response) => {
  response.json({
    message: 'get all projects',
  });
});

router.post('/eb-api-data', etfController.addApiData)
router.get('/getEtfTable', etfDataController.getEtfList)

export { router as EBRoute };