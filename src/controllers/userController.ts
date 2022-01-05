import {Users} from '../model/User';
import {Request, Response} from 'express';


export default class userController {

    async index(req: Request, res: Response) {
        const result = await Users.find();
        res.json(result)
    }
    async create(req: Request, res: Response){
        const { name, age, title } = req.body;
        const data = await Users.create({ name, age, title });
        return res.json(data);
      }
  }
