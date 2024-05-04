import { NotFoundError } from "@abdelslamtickits/common";
import { errorHandler } from "@abdelslamtickits/common";
import express from "express";
import cookieSession from "cookie-session";

const app = express();
app.set("trust proxy", true);
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
