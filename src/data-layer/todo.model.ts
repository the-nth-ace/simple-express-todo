import mongoose from "mongoose";

export class ITodo {
  _id: string;
  text: string;
  done: boolean;
}

export const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});
