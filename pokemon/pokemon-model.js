const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  getAll
};

async function insert(pokemon) {
  return db("pokemon").insert(pokemon, "id");
}

function getAll() {
  return db("pokemon");
}
