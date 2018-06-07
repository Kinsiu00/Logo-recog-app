
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {id: 1, name: 'Galvanize', description: 'Galvanize is a community bridging the longstanding gap of industry and education by bringing industry partners, ambitious students, and education under one roof.', products: 'Web Developers, Data Scientists'},
        {id: 2, name: 'Wandering Bear Coffee', description: 'Created cold brew coffee off modeled after our favorite coffee shops around New York City. The boxes (with a tap!) eliminates air and light: the two things that makes coffee go stale.', products: 'Cold Brew Coffee in a box (with a tap!)'},
        {id: 3, name: 'wing', description: 'Sells C stuff', products: 'C'},
      ]);
    });
};
