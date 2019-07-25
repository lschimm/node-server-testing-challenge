//tests will go here

const db = require("../data/dbConfig.js");

const Pokemon = require("./pokemon-model.js");

// describe("pokemon model", () => {
//   beforeEach(async () => {
//     await db("pokemon").truncate();
//   });

//   describe("insert()", () => {
//     it("should insert the pokemon into the db", async () => {
//       await Pokemon.insert({ name: "ninetails" }); //using the API

//       const pokemon = await db("pokemon"); // looking directly into the db

//       expect(pokemon).toHaveLength(1);
//     });

//     it("should insert the pokemon into the db", async () => {
//       await Pokemon.insert({ name: "arcanine" }); // using the API
//       await Pokemon.insert({ name: "magmar" }); // using the API

//       const pokemon = await db("pokemon"); //directly looking into the db

//       expect(pokemon).toHaveLength(2);
//     });
//   });
// });

describe("pokemon model", () => {
  beforeEach(async () => {
    await db("pokemon").truncate();
  });

  describe("insert()", () => {
    it("should insert the pokemon into the db", async () => {
      await Pokemon.insert({ name: "gaffer" }); // using the api

      const pokemon = await db("pokemon"); // directly looking into db

      expect(pokemon).toHaveLength(1);
    });

    it("should insert the pokemon into the db", async () => {
      await Pokemon.insert({ name: "elanor" }); // using the api
      await Pokemon.insert({ name: "rose" }); // using the api

      const pokemon = await db("pokemon"); // directly looking into db

      expect(pokemon).toHaveLength(2);
    });
  });
});
