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
    console.log("Handling RequstValidationError");
  } else if (err instanceof DatabaseConnectionError) {
    console.log("Handling DatabaseConnectionError");
  }
  res.status(400).json({ error: err.message });
};
