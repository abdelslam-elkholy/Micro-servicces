import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequstValidationError } from "../errors/request-validation-error";
import { IUser, User } from "../models/user";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequstValidationError(errors.array());
    }
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email already in Use");
      return res.send({});
    }

    const user = User.create({ email, password });
  }
);

export { router as signupRouter };
