import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import route from './routes/routes';
import cors from 'cors';
import { globalExceptionHander } from './handlers/global-exception-handler';
const app = express();
let baseURL = ['https://trayistatplatformui.azurewebsites.net/'];
if (process.env.NODE_ENV !== 'production') {
  baseURL.push('http://localhost:3000');
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: baseURL,
  })
);
app.use('/api', route);
app.get('/', (request: Request, response: Response) => {
  response.json({
    message: 'Works',
  });
});

app.get('/health', (request: Request, response: Response) => {
  response.json({
    message: 'Server up and Running',
  });
});
//No route match handler
app.use(function (_, response) {
  response.status(404).json({
    error: ' Oops Page Not Found!',
  });
});
app.use(globalExceptionHander);

export default app;
