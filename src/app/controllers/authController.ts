import {Users} from '../models/User';
import {Request, Response} from 'express';
import jwt from 'jsonwebtoken'

class authController {

    public async auth(req: Request, res: Response) {
      const user = await Users.findOne(req.body.id);
      const token = jwt.sign({ id: user.id}, 'secret', { expiresIn: '1h' });
      
      return res.json({
        user,
        token
      })
    }
  }

export default new authController;
