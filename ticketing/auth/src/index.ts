import express, { Request, Response } from "express";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

const app = express();
app.use(express.json());

app.get("/api/users/h", (req: Request, res: Response) => {
  res.send("Hey");
});

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use("/api/users/signup", signupRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000!!!");
});
