import { ValidationError } from "express-validator";

export class RequstValidationError extends Error implements CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super();

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequstValidationError.prototype);
  }

  serializeErrors = () => {
    return this.errors.map((error) => {
      if (error.type === "field") {
        return { message: error.msg, field: error.path };
      }
      return { message: error.msg };
    });
  };
}
