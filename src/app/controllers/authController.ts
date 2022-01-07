import { Users } from "../models/User";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

class authController {
  public async login(req: Request, res: Response) {
    const {email, password} = req.body;
    const user = await Users.findOne({ email });

    //Criar um objeto de erros depois

    if (!user || !password) {
        return res.status(400).json({ error: "User not found" });
    }
    if (!(await bcrypt.compare(password, user.password))){
        return res.status(400).json({ error: "Invalid password" });
    }
    const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "30d" });
    res.send(token);
  }
}

export default new authController();
