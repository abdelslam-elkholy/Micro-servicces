import request from "supertest";
import { app } from "../../app";

it("response with details about the current user", async () => {
  const authResponse = await request(app)
    .post("/api/users/signup")
    .send({
      email: "user@example.com",
      password: "password",
    })
    .expect(201);

  const cookie = authResponse.get("Set-Cookie");

  const response = await request(app)
    .get("/api/users/current-user")
    .set("Cookie", cookie!)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toEqual("user@example.com");
});