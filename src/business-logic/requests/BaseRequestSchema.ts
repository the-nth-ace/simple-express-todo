import { IsNumber, IsString } from "class-validator";

export class BaseRequestSchema {
  @IsString({
    message: "field be a string",
  })
  name: string;

  @IsNumber()
  age: number;

  constructor(requestBody: any) {
    this.name = requestBody.name;
    this.age = requestBody.age;
  }
}
