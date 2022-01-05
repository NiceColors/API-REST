import express, { Router } from 'express';
import userController from '../app/controllers/userController';
import authController from '../app/controllers/authController';
import authMiddleware from '../app/middlewares/authMiddleware';


const app = express();
const router = Router()

app.use(express.json())

router.post('/', userController.create);
router.post('/auth', authController.auth);
router.get('/users', authMiddleware, userController.index)


export const hello: Router = router;