import { Injectable } from "@decorators/di";
import mongoose, { Model } from "mongoose";
import { ITodo, TodoSchema } from "./todo.model";

@Injectable()
export class DbContext {
  private _db: typeof mongoose;

  public async connect(): Promise<void> {
    console.log("DB_URIL should be", process.env.DB_URI);
    try {
      this._db = await mongoose.connect(process.env.DB_URI);
      console.log("MONGODB is eating good");
    } catch (err) {
      console.log(`Something went wrong with MONGODB CONN`, err);
    }
  }

  public get todo(): Model<ITodo> {
    return this._db.model<ITodo>("Todo", TodoSchema);
  }
}
