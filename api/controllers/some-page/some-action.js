module.exports = {


  friendlyName: 'Some action',


  description: '',


  inputs: {
    requiredParam: {
      example: 'some_value',
      required: true,
      type: 'string',
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    const someProcesses = await sails.helpers.someHelper();

    return exits.success(someProcesses);

  }


};
