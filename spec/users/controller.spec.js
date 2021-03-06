/* eslint-disable dot-location */
/* eslint-disable no-undef */
const request = require("supertest");
const app = require("../../server");


describe("User - save", () => {

  it("Body undefined", async () => {
    const res = await request(app)
      .post("/api/users")
      .send();
    expect(res.statusCode).toEqual(400);
  });

  it("Name is required", async () => {

    const res = await request(app).post("/api/users")
      .send({
        cpf: "00000000000",
        gender: "female"

      });
    expect(res.statusCode).toEqual(400);

  });

  it("User created", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({
        cpf: "00000000000",
        gender: "female",
        name: "Maria"
      });
    expect(res).not.toBeNull(true);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Maria");
    expect(res.body.gender).toBe("female");
    expect(res.body.cpf).toBe("00000000000");
  });
});

describe("User - findAll", () => {
  it("List All Users", async () => {
    const res = await request(app)
      .get("/api/users");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
  });
});