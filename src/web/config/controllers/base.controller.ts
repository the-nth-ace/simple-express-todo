import { Inject } from "@decorators/di";
import { BaseService } from "@business-logic/BaseService";
import { BaseRequestSchema } from "../../../business-logic/requests/BaseRequestSchema";
import { validateRequest } from "../../../business-logic/utils/validateRequestProcessor";

import { instanceToPlain } from "class-transformer";

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
  getData(@Response() res: any) {
    res.send(this.baseService.get());
  }

  @Get("/:id")
  getOneData(@Response() res: any, @Params("id") id: string) {
    console.log(id);
    res.send(this.baseService.get());
  }

  @Post("/")
  async postData(@Response() res: any, @Body() body: BaseRequestSchema) {
    let validationErrors: any[] = await validateRequest(
      BaseRequestSchema,
      body
    );

    if (validationErrors.length > 0) {
      res.send(
        {
          throw: true,
          status: 406,
          message: "Incorrect input",
          data: validationErrors,
        },
        400
      );
    }

    return res.send(body);
  }
}
