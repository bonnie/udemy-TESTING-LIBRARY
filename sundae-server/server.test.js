const request = require("supertest");
const app = require("./server.js");

describe("test server", () => {
  beforeEach(async () => {
    server = await app.listen(4000);
    global.agent = request.agent(server);
  });

  afterEach(async () => {
    await server.close();
  });
  describe("ice cream flavors", () => {
    test("responds with status 200 the GET method", () => {
      return request(server)
        .get("/scoops")
        .then((response) => {
          expect(response.statusCode).toBe(200);
        });
    });
    test("response has expected number of ice cream flavors, and each has a name and image", () => {
      return request(server)
        .get("/scoops")
        .then((response) => {
          expect(response.body.length).toBe(4);
          response.body.forEach((flavor) => {
            expect(typeof flavor.name).toBe("string");
            expect(typeof flavor.imagePath).toBe("string");
          });
        });
    });
  });

  describe("toppings", () => {
    test("responds with status 200 the GET method", () => {
      return request(server)
        .get("/toppings")
        .then((response) => {
          expect(response.statusCode).toBe(200);
        });
    });
    test("response has expected number of ice cream toppings, and each has a name and image", () => {
      return request(server)
        .get("/toppings")
        .then((response) => {
          expect(response.body.length).toBe(6);
          response.body.forEach((topping) => {
            expect(typeof topping.name).toBe("string");
            expect(typeof topping.imagePath).toBe("string");
          });
        });
    });
  });

  describe("order number generator", () => {
    test("returns 201 for POST", () => {
      return request(app)
        .post("/order")
        .then((response) => {
          expect(response.statusCode).toBe(201);
        });
    });
    test('returns random "order number" for POST', () => {
      return request(app)
        .post("/order")
        .then((response) => {
          const orderNumber = response.body.orderNumber;
          expect(orderNumber).toBeLessThan(10000000000);
          expect(orderNumber).toBeGreaterThan(0);
        });
    });
  });
});
