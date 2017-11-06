// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

function SagePayTransaction() {
  this.prefix = 'sage_pay_transaction.';
}
util.inherits(SagePayTransaction, events.EventEmitter);

// prototypes we will be applying
var protos = {
  /**
    Allows you to retrieve information about the required transaction.
  */
  info: {
    mandatory: 'vpstxcode'
  },

  /**
    Allows you to retrieve the list of transactions.
  */
  list: true
};

// creating prototypes using curry func
for (var key in protos) {
  SagePayTransaction.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = SagePayTransaction;
