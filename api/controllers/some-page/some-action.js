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
    someError: {
      description: 'Handles some error happens in controller',
      message: 'Some error handled in controller',
    }
  },


  fn: async function (inputs, exits) {

    const someProcesses = await sails.helpers.someHelper(inputs.requiredParam)
      .intercept('someError', exits.someError);// Error happens here

    return exits.success(someProcesses);

  }


};
