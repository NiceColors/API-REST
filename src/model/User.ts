import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

mongoose.connect(`${process.env.DB}`);
const userSchema = new mongoose.Schema({
  name: String,
  age: String,
  title: String,
},
);



export const Users = mongoose.model("users", userSchema);

