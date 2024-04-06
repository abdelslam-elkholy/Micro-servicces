import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequstValidationError } from "../errors/request-validation-error";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().notEmpty().withMessage("you must suplly message"),
  ],
  (req: Request, res: Response) => {
    console.log("working from sign in ");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequstValidationError(errors.array());
    }
  }
);

export { router as signinRouter };
