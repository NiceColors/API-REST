import express, { Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const app = express();
const router = Router()

app.use(express.json())

mongoose.connect(`${process.env.DB}`);

const userSchema = new mongoose.Schema({
  name: String,
  age: String,
  title: String,
},
);

const Users = mongoose.model("users", userSchema);

router.get('/', async (req: Request, res: Response) => {
  const result = await Users.find();
  res.json(result)
})

// router.get('/:name', (req: Request, res: Response) => {
//     let { name } = req.params;
//     res.json({ message: `Bom dia, ${name}`});
// });

router.post('/', async (req: Request, res: Response) => {
  const { name, age, title } = req.body;
  const data = await Users.create({ name, age, title });
  return res.json(data);
});

export const hello: Router = router;