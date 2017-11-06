// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
 Custom web services
 */
function Webservices() {
    this.prefix = 'webservices.';
}
util.inherits(Webservices, events.EventEmitter);


// prototypes we will be applying
var protos = {
    /**
     Allows you to create a guest order
     */
    createNewGuestOrder: {
        mandatory: 'data',
    },

    syncConfigurableProduct: {
        mandatory: 'data',
    },

    syncSimpleProduct: {
        mandatory: 'data',
    },

    syncCustomer: {
        mandatory: 'data',
    }
};

// creating prototypes using curry func
for (var key in protos) {
    Webservices.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = Webservices;
