import express from 'express';
import * as bodyParser from "body-parser";
import { hello } from './routes/hello';
import dotenv from 'dotenv';
dotenv.config()

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/hello', hello);
app.use('/', hello);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});