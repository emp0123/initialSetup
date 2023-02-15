import { PoolConnection } from 'mysql2';
import { pool } from './databaseSetupMysql';

export const getConnection = async (): Promise<PoolConnection> => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
};

export type BindValue = number | string | Date | boolean;
export const execute = async function (query: string, bindValuesArray: BindValue[] = []) {
  let connection: PoolConnection;
  return new Promise(async (resolve, reject) => {
    try {
      connection = await getConnection();
      connection.query(query, bindValuesArray, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    } catch (e) {
      reject(e);
    } finally {
      connection.release();
    }
  });
};
