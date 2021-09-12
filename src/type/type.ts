import mongoose, { Document, Model } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  age?: number;
  tokens? : {[key: string]: string}[];
  generateAuthToken: () => string;
  toJSON: <UserDocument>() => UserDocument;
  task: {[key: string]: string | boolean}[]
  avatar?: BufferConstructor;
}

export interface UserModel extends Model<UserDocument> {
  findByCredentials: (email: string, password: string) => UserDocument;
}

export interface TaskDocument extends Document {
  description: string;
  completed?: boolean;
  owner: mongoose.Schema.Types.ObjectId;
};

export type DecodedToken = { _id: string; iat: number };

declare global {
  namespace Express {
    interface Request {
      user: UserDocument;
      token: string;
    }
  }
}
