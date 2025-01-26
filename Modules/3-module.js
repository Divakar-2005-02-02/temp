
const names = require('./4.names')
const sayHi = require('./2.module')
require('./6.mind_grenade')
console.log(names)
sayHi("Divakar");
sayHi(names.john);
sayHi(names.peter)