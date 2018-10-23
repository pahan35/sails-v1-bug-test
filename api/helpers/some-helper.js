module.exports = {


  friendlyName: 'Some helper',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    // All done.
    return exits.success('someProcessedValue');

  }


};

