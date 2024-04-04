
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
// import CustomError from './utils/CustomError';
// import type { Request, Response } from 'express';
// import { statusCode } from './utils/statusCode';
import { join, resolve } from 'path';

const  PORT  = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());


app.use(express.static(join(__dirname, '../client/dist/')));
app.get('*', (_req, res) => res.sendFile(resolve(__dirname, '../client/dist')));



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
