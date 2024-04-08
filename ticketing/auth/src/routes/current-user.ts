import { currentUser } from "./../middlewares/current-user";
import jwt from "jsonwebtoken";
import express, { Request, Response } from "express";
import { requireAuth } from "../middlewares/require-auth";

const router = express.Router();

router.get(
  "/api/users/current-user",
  currentUser,
  requireAuth,
  (req: Request, res: Response) => {
    res.send({ currenUser: req.currentUser || null });
  }
);

export { router as currentUserRouter };
