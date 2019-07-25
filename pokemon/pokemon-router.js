const express = require("express");

const Pokemon = require("../pokemon/pokemon-model.js");

const server = expresss();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});
