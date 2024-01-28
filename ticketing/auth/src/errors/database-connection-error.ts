export class DatabaseConnectionError extends Error {
  reason = "Database connection error";
  constructor() {
    super();
  }
}
