import { currentUser } from "./../middlewares/current-user";
import jwt from "jsonwebtoken";
import express, { Request, Response } from "express";

const router = express.Router();

router.get(
  "/api/users/current-user",
  currentUser,
  (req: Request, res: Response) => {
    res.send({ currenUser: req.currentUser });
  }
);

export { router as currentUserRouter };
