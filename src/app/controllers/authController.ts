import { User } from "../models/User";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

class authController {
  public async login(req: Request, res: Response) {
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    const errors = {
      notFound: res.status(400).json({ error: "User not found" }),
      invalid: res.status(400).json({ error: "Invalid password" }),
    };

    if (!user || !password) return errors.notFound; 

    else if (!(await bcrypt.compare(password, user.password))) return errors.invalid;
    
    const token = jwt.sign({ user_id: user._id, email }, "secret", {
      expiresIn: "2h",
    });

    user.token = token;

    return res.status(200).json(user);
  }
}

export default new authController();
