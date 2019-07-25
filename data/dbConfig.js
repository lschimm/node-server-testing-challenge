const knex = require("knex");
const config = require("../knexfile.js");
require("dotenv").config();

const environment = process.env.DB || "development";

module.exports = knex(config[environment]);
