// the testing will go here

const request = require("supertest"); // npm i -D supertest

const server = require("./server.js"); // the system that under the testing! the SUT, brah

describe("server", () => {
  it("db environment set to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it("should return 200 OK", () => {
      // rest client and make a get to '/',
      // look at the status code
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return data in JSON", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/);
          expect(res.type).toBe("application/json");
        });
    });

    it('should return { api: "up to the roof" } as the body', () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual({ api: "up to the roof" });
          expect(res.body.api).toBe("up to the roof");
        });
    });
  });
});
