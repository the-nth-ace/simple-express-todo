declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    DB_URI: string;
    SECRET: string;
    SERIAL_NUMBER_LENGTH: number;
    BANK_CODE: string;
  }
}
