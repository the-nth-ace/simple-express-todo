import { Injectable, Inject } from "@decorators/di";
import { DbContext } from "../data-layer/DbContext";

@Injectable()
export class BaseService {
  constructor(@Inject(DbContext) private dbContext: DbContext) {}

  async getAll() {
    return await this.dbContext.todo.find().exec();
  }

  async getById(id: string) {
    return await this.dbContext.todo.findById(id).exec();
  }

  async markAsDone(id: string) {
    await this.dbContext.todo
      .findByIdAndUpdate(id, {
        done: true,
      })
      .exec();
  }

  async createTodo(dto: { text: string }) {
    await this.dbContext.todo.create(dto);
  }
}
