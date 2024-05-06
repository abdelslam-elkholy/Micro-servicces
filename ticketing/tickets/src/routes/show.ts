import express, { Request, Response } from "express";

import { Ticket } from "../models/tickets";
import { NotFoundError } from "@abdelslamtickits/common";

const router = express.Router();

router.get("/api/tickets/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const ticket = Ticket.findById(id);

  if (!ticket) throw new NotFoundError();

  res.status(200).json(ticket);
});

export { router as showTcketRouter };
