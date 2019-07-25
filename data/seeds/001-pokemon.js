exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("pokemon")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("pokemon").insert([
        { name: "growlithe" },
        { name: "charmander" },
        { name: "cyndaquil" },
        { name: "flareon" },
        { name: "vulpix" }
      ]);
    });
};
