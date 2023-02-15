import { response } from 'express';
import { execute } from '@/config/database/queryWrapperMysql';
import axios from 'axios';
import { SomthingWentWrongException } from '@/exceptions/SomthingError-exception';

export const insertEtfData = {
  addEtfData: async () => {
    return apiDataSave();
  },
};
const apiDataSave = async () => {  
const apiUrl = 'https://financialmodelingprep.com/api/v3/etf/list';
const apiKey = '676d06092706b16a94c5e68df5649f77';
  const response = await axios.get(`${apiUrl}?apikey=${apiKey}`);
  const data = response.data;
  let dataBundle: any = [];
  for (const item of data) {
    dataBundle.push([item.symbol, item.name, item.price, item.exchange, item.exchangeShortName, item.type]);
  }

  if (dataBundle.length === 0) {
     throw new SomthingWentWrongException();
  }

  let query = 'INSERT INTO etf_table ( symbol, name, price, exchange, exchange_shorts, type) VALUES  ?';
  let result: any = await execute(query,[dataBundle]);
  if (result?.length > 1) {
    throw new SomthingWentWrongException();
  }
  return {
    success: true,
   };
};
