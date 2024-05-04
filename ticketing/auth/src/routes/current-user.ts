import { currentUser } from "@abdelslamtickits/common";
import express, { Request, Response } from "express";
import { requireAuth } from "@abdelslamtickits/common";

const router = express.Router();

router.get(
  "/api/users/current-user",
  currentUser,
  requireAuth,
  (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null });
  }
);

export { router as currentUserRouter };
