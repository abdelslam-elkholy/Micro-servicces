import request from "supertest";
import { app } from "../../app";

it("should return a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "12345678",
    })
    .expect(201);
});
