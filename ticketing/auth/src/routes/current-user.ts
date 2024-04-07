import jwt from "jsonwebtoken";
import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/users/current-user", (req: Request, res: Response) => {
  if (!req.session?.jwt) {
    return res.send({ currentUser: null });
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY as string);
    res.send({ currentUser: payload });
  } catch (error) {
    res.send({ currentUser: null });
  }
});

export { router as currentUserRouter };
