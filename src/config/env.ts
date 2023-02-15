import { config } from "dotenv";
import { cleanEnv, str, num } from 'envalid';
import path from 'path';
config({
  path: path.resolve(__dirname, '../../', `.env.${process.env.NODE_ENV}.local`),
});

const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['test', 'development', 'production'] }),
  MYSQL_HOST: str(),
  MYSQL_PORT: num({ default: 3306 }),
  MYSQL_USERNAME: str(),
  MYSQL_PASSWORD: str(),
  MYSQL_DATABASE: str(),
});

export { env };
