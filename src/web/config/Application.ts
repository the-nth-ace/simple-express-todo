import { ExpressConfig } from "./Express";

export class Application {
  server: any;
  express: ExpressConfig;

  constructor() {
    this.express = new ExpressConfig();
    const port = process.env.PORT;

    this.server = this.express.app.listen(port, () => {
      console.clear();
      console.log(`
      -----------------------------------------------------
       Server Started! Express: http://localhost:${port}
       Health : http://localhost:${port}/ping
      -----------------------------------------------------
      `);
    });
  }
}
