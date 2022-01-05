import express, { Router } from 'express';
import dotenv from 'dotenv';
import userController from '../controllers/userController';

dotenv.config()

const app = express();
const router = Router()
const user = new userController;

app.use(express.json())

router.post('/', user.create);

router.get('/', user.index)

export const hello: Router = router;