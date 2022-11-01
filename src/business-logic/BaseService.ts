import { Injectable } from "@decorators/di";
import console from "console";

@Injectable()
export class BaseService {
  constructor() {}

  get() {
    return {
      message: "Hello world",
    };
  }
}
