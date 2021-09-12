import { Types } from "mongoose";
import { sign } from "jsonwebtoken";
import { User  } from "../../src/models/user";
import { Task } from "../../src/models/task";

export const userOneId = new Types.ObjectId();
export const userOne = {
  _id: userOneId,
  name: "Mike",
  email: "mike@example.com",
  password: "56what!!",
  tokens: [
    {
      token: sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

export const userTwoId = new Types.ObjectId();
export const userTwo = {
  _id: userTwoId,
  name: "Jess",
  email: "jess0404@example.com",
  password: "jess0404",
  tokens: [
    {
      token: sign({ _id: userTwoId }, process.env.JWT_SECRET),
    },
  ],
};

export const taskOne = {
  _id: new Types.ObjectId(),
  description: "First task",
  completed: false,
  owner: userOne._id,
};

export const taskTwo = {
  _id: new Types.ObjectId(),
  description: "Second task",
  completed: true,
  owner: userOne._id,
};

export const taskThree = {
  _id: new Types.ObjectId(),
  description: "Third task",
  completed: true,
  owner: userTwo._id,
};

export const setUpDatabase = async () => {
  // await deleteMany();
  // await _deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};
