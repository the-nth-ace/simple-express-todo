import { IsString } from "class-validator";

export class TodoRequestSchema {
  @IsString()
  text: string;

  constructor(obj: any) {
    this.text = obj.text;
  }
}
