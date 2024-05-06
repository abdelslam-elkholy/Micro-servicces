import {
  NotFoundError,
  errorHandler,
  currentUser,
} from "@abdelslamtickits/common";
import express from "express";
import cookieSession from "cookie-session";
import { createTicketRouter } from "./routes/new";

const app = express();
app.set("trust proxy", true);
app.use(express.json());

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUser);

app.use(createTicketRouter);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };