import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: String,
  email: String,
  password: String,
});

export const Users = mongoose.model("users", userSchema);
