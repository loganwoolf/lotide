const assertEqual = require('../assertEqual');

console.log("--Should Pass--");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);

console.log('\n--Should Fail--');
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 2);