import mongoose, { Document } from "mongoose";

export interface UserModel extends Document {
  name: string;
  email: string;
  password: string;
  age?: number;
  tokens: string[];
  avatar?: BufferConstructor;
}

export interface TaskModel extends Document {
  description: string;
  completed?: boolean;
  owner: mongoose.Schema.Types.ObjectId;
};
