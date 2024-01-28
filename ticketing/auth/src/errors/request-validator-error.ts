import { ValidationError } from "express-validator";

export class RequstValidationError extends Error {
  constructor(private errors: ValidationError[]) {
    super();

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequstValidationError.prototype);
  }
}
