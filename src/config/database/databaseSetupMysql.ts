import mysql from 'mysql2';
import { env } from '../env';

export const pool = mysql.createPool({
  connectionLimit:10,
  //queueLimit:1,
  host: env.MYSQL_HOST, // ip address of server running mysql
  port: env.MYSQL_PORT,
  user: env.MYSQL_USERNAME, // user name to your mysql database
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE, // use the specified database
  multipleStatements: true,
});
