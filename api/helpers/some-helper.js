module.exports = {


  friendlyName: 'Some helper',


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
      description: 'Just some error happens in workflow',
      message: 'Some error happens!',
    }
  },


  fn: async function (inputs, exits) {

    // All done.
    return inputs.requiredParam === 'isError' ? exits.success('someError') : exits.success('someProcessedValue');

  }


};

