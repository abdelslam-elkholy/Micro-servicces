import { Request, Response, NextFunction } from "express";
import { RequstValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequstValidationError) {
    const formattedErrors = err.errors.map((error) => {
      if (error.type === "field") {
        return { message: error.msg, field: error.path };
      }
    });
  } else if (err instanceof DatabaseConnectionError) {
    res.status(500).json({ errors: [{ message: err.reason }] });
  }
  res.status(400).json({ error: err.message });
};
