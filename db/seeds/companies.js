
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {id: 1, name: 'Company A', description: 'Sells A stuff', products: 'A'},
        {id: 2, name: 'Company B', description: 'Sells B stuff', products: 'B'},
        {id: 3, name: 'Company C', description: 'Sells C stuff', products: 'C'},
      ]);
    });
};
