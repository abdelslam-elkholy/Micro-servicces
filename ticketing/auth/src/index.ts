import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/notFound-error";

const app = express();
app.use(express.json());

app.get("/api/users/h", (req: Request, res: Response) => {
  res.send("Hey");
});

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.get("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected Successfully To DB");
  } catch (error) {
    console.log(error);
  }
};

app.listen(3000, () => {
  console.log("Listening on port 3000!!!");
});

start();
