import express from "express";

const router = express.Router();

router.get("/api/users/signup", (req, res) => {
  res.send("<h1>Welcome!</h1>");
});

export { router as signupRouter };
