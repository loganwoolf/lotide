const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("Tests for letterPositions()", () => {

  it("returns the correct object for 'Hello Olleh'"
    , () => {
      assert.deepEqual(
        letterPositions('Hello Olleh')
        , {h: [0,10], e: [1,9], l: [2,3,7,8], o: [4,6]}
      );
    });

  it("returns the correct object for 'me ME me ME'"
    ,() => {
      assert.deepEqual(
        letterPositions('meMEmeME')
        , {m: [0,2,4,6], e: [1,3,5,7]}
      );
    });

});