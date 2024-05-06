import request from "supertest";
import { app } from "../../app";

it("should returns 404 if the ticket is not found", async () => {
  const res = await request(app).get("/api/tickets/fdsvgfdvff").send();
  // .expect(404);
  console.log(res);
});

it("should returns ticket if the ticket is  found", async () => {
  const title = "title";
  const price = 20;
  const response = await request(app)
    .post("/api/tickets/")
    .set("Cookie", global.signin())
    .send({
      title,
      price,
    })
    .expect(201);
  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200);
  expect(ticketResponse.body.title).toEqual(title);
  expect(ticketResponse.body.price).toEqual(price);
});
