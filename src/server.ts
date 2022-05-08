import express, { Request, Response } from 'express';
import routes from './routes/index';
import client from './config/client';
import cors from 'cors';

const app: express.Application = express();
const port = 5000;
const address: string = `http://localhost:${port}`;

app.use(express.json());
app.use('/', routes);
app.use(cors());

app.get('/', function (req: Request, res: Response) {
  res.send('Welcome to the API!');
});

client.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + client.threadId);
});

app.listen(port, function () {
  console.log(`Server started running on port ${port}, And address: ${address}`);
});

export default app;
