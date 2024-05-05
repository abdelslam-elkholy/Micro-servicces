import request from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";
import jwt from "jsonwebtoken";
declare global {
  var signin: () => string[];
}

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = "asdfgh";
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();

  await mongoose.connect(uri, {});
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();
});

global.signin = () => {
  //Build a JWT Payload
  const payload = {
    id: "12sadas1fa2s1f",
    email: "user@example.com",
  };

  // Create the JWT
  const token = jwt.sign(payload, process.env.JWT_KEY as string);

  // Build session object. { jwt: MY_JWT }
  const session = { jwt: token };

  // Turn session  into JSON
  const sessionJson = JSON.stringify(session);

  // Take JSON and encode it as base64
  const base64 = Buffer.from(sessionJson).toString("base64");

  // return base64 encoded
  return [`session=${base64}`];
};
