const express = require("express");
const Pokemon = require("../pokemon/pokemonModel.js");

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

module.exports = server;
