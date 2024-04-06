import { RequstValidationError } from "./../errors/request-validation-error";
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validateRequestm = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequstValidationError(errors.array());
  }

  next();
};
