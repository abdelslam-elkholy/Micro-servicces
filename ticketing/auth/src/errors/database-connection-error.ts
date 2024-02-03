import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = "Database connection error";
  constructor() {
    super("Error Connecting To DB");
  }

  serializeErrors = () => {
    return [{ message: this.reason }];
  };
}
