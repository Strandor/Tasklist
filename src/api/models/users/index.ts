import mongoose from "mongoose";
const { Schema } = mongoose;

const usersSchema = new Schema({
  id: String,
  name: String,
});

export const Users = mongoose.model("users", usersSchema);
