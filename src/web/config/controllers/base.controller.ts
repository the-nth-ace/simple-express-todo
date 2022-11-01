import { Inject } from "@decorators/di";
import { BaseService } from "@business-logic/BaseService";
import { BaseRequestSchema } from "../../../business-logic/requests/BaseRequestSchema";
import { validateRequest } from "../../../business-logic/utils/validateRequestProcessor";

import { instanceToPlain } from "class-transformer";
import { TodoRequestSchema } from "../../../business-logic/requests/TodoRequestSchema";

import {
  Response,
  Params,
  Controller,
  Get,
  Post,
  Body,
} from "@decorators/express";

@Controller("/")
export class BaseController {
  constructor(@Inject(BaseService) private baseService: BaseService) {}

  @Get("/")
  async getData(@Response() res: any) {
    const data = await this.baseService.getAll();
    res.status(200).send(data);
  }

  @Get("/:id")
  async getOneData(@Response() res: any, @Params("id") id: string) {
    res.status(200).send(await this.baseService.getById(id));
  }

  @Post("/")
  async postData(@Response() res: any, @Body() body: TodoRequestSchema) {
    console.log(body);
    let validationErrors: any[] = await validateRequest(
      TodoRequestSchema,
      body
    );

    if (validationErrors.length > 0) {
      res.status(400).send({
        message: "Incorrect input",
        data: validationErrors,
      });
    }

    await this.baseService.createTodo(body);
    res.status(201).send({
      message: "Success",
    });
  }

  @Get("/:id/done")
  async markTaskAsDone(@Response() res: any, @Params("id") id: string) {
    await this.baseService.markAsDone(id);
    res.status(200).send({
      message: "Success",
    });
  }
}
