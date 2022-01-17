const assert = require('chai').assert;
const tail = require('../tail');

describe('Tests for tail()', () => {

  it('returns 9 for [7, 8, 9]'
    , () => {
      assert.deepEqual(
        tail([7,8,9])
        , [8, 9]);
    }
  );

  it('returns ["Bob", "Miroslav", "Hector"] for\n        ["Jim", "Bob", "Miroslav", "Hector"]'
    , () => {
      assert.deepEqual(
        tail(["Jim", "Bob", "Miroslav", "Hector"])
        , ["Bob", "Miroslav", "Hector"]
      );
    }
  );

  it('returns [] for [9]'
    , () => {
      assert.deepEqual(
        tail([9])
        , []
      );
    }
  );



});





/* OLD TESTS
const assertEqual = require('../assertEqual');
const tail = require('../tail');

console.log('--Test #1--');
const arr1 = [5, 7, 9];
const result1 = tail(arr1);
assertEqual(result1[0], 7);
assertEqual(result1[1], 9);
assertEqual(result1.length, 2);
assertEqual(arr1.length, 3);

console.log('\n--Test #2--');
const arr2 = ["Jim", "Bob", "Miroslav", "Hector"];
const result2 = tail(arr2);
assertEqual(result2[0], "Bob");
assertEqual(result2[1], "Miroslav");
assertEqual(result2[2], "Hector");
assertEqual(result2.length, 3);
assertEqual(arr2.length, 4);

console.log('\n--Test #3--');
const arr3 = [4];
const result3 = tail(arr3);
assertEqual(result3.length, 0);
 */