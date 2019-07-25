const express = require("express");
const Pokemon = require("../pokemon/pokemon-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up to the roof" });
});

server.get("/pokemon", (req, res) => {
  Pokemon.getAll()
    .then(pokemon => {
      res.status(200).json(pokemon);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post("/pokemon", async (req, res) => {
  const poke = req.body;
  //   console.log("poke", poke);
  await Pokemon.insert(poke)
    .then(mon => {
      res.status(201).json(mon);
    })
    .catch(error => {
      res.status(500).json({ message: "cannot add that pokemon" });
    });
});

module.exports = server;
