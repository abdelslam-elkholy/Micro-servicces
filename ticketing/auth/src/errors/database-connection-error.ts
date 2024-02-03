export class DatabaseConnectionError extends Error {
  statusCode = 500;
  reason = "Database connection error";
  constructor() {
    super();
  }

  serializeErrors = () => {
    return [{ message: this.reason }];
  };
}
