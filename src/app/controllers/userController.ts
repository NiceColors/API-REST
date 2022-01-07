import { Users } from "../models/User";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class userController {
  public async index(req: Request, res: Response) {
    const result = await Users.find();
    // remove password from response
    result.forEach(user => {
      delete user.password;
    });
  
    return res.json(result);
  }

  public async create(req: Request, res: Response) {
    const { name, age, email, password } = req.body;
    const exists = await Users.findOne({ email });
    if (exists) {
      return res.sendStatus(409);
    }
    const pass = bcrypt.hashSync(password, 8);
    const data = await Users.create({ name, age, email, password: pass });
    data.save();
    return res.json(data);
  }
}

export default new userController();
