import { User } from "../models/User";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class userController {
  public async index(req: Request, res: Response) {
    const result = await User.find();
    // remove password from response
    result.forEach((user) => {
      delete user.password;
    });

    return res.json(result);
  }

  public async create(req: Request, res: Response) {
    const { name, age, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) {
      return res.sendStatus(409);
    }
    const pass = bcrypt.hashSync(password, 8);
    const data = await User.create({ name, age, email, password: pass });
    const token = jwt.sign({ data_id: data._id, email }, "secret", {
      expiresIn: "2h",
    });
    data.token = token;
    
    res.status(201).send(data.token);
  }
}

export default new userController();
