import request from "supertest";
import { app } from "../../app";

it("has a route handler listening to /api/tickets for post requests", async () => {
  const response = await request(app).post("/api/tickets").send({});

  expect(response.statusCode).not.toEqual(404);
});
it("can only be accessed if the user is loggedin ", async () => {
  const response = await request(app).post("/api/tickets").send({}).expect(401);
});
it("return status other than 401 if the user is signedin ", async () => {
  const response = await request(app).post("/api/tickets").send({});

  expect(response.statusCode).not.toEqual(401);
});
it("returns an error if invalid title is provided ", async () => {});
it("returns an error if invalid price is provided ", async () => {});
it("creats tickets with valid inputs ", async () => {});
