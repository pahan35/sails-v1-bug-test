const sails = require('sails');

// Before running any tests...
before((done) => {
  sails.lift({
    // Your sails app's configuration files will be loaded automatically,
    // but you can also specify any other special overrides here for testing purposes.

    // For example, we might want to skip the Grunt hook,
    // and disable all logs except errors and warnings:
    hooks: { grunt: false },
    log: { level: 'warn' },// disable ship and other logs
  }, (err) => {
    if (err) { return done(err); }
    // here you can load fixtures, etc.
    // (for example, you might want to create some records in the database)

    return done();
  });
});

// After all tests have finished...
after(async () => {
  // here you can clear fixtures, etc.
  // (e.g. you might want to destroy the records you created above)

  await sails.lower();

});
