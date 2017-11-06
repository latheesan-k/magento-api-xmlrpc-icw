// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

function Batchcode() {
  this.prefix = 'batchcode.';
}
util.inherits(Batchcode, events.EventEmitter);

// prototypes we will be applying
var protos = {
  batchcode: {
    mandatory: 'shipmentId,sku,batchId,templateId'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  Batchcode.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = Batchcode;
