const assertEqual = require('../assertEqual');
const head = require('../head');

console.log("--Should Pass--");
assertEqual(head(['Logan','Frank','Jim']), 'Logan');
assertEqual(head([5,7,9]), 5);
assertEqual(head([]), undefined);

console.log('\n--Should Fail--');
assertEqual(head(['Logan','Frank','Jim']), 'Frank');
assertEqual(head([5,7,9]), 9);