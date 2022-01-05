import {Users} from '../models/User';
import {Request, Response} from 'express';


class userController {

    public async index(req: Request, res: Response) {
        const result = await Users.find();
        res.json({userId: req.userId})
    }
    public async create(req: Request, res: Response){
        const { name, age, title } = req.body;
        const data = await Users.create({ name, age, title });
        return res.json(data);
      }
  }

export default new userController;
