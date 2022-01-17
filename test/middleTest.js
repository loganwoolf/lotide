const assert = require('chai').assert;
const middle = require('../middle');


describe('Tests for middle()', () => {
  
  it('returns ["Bobby"] for ["Bill", "Bobby", "Bognar"]'
    , () => {
      assert.deepEqual(
        middle(["Bill", "Bobby", "Bognar"])
        , ["Bobby"]
      );
    }
  );

  it('returns [3, 4] for [1, 2, 3, 4, 5, 6]'
    , () => {
      assert.deepEqual(
        middle([1, 2, 3, 4, 5, 6])
        , [3, 4]
      );
    }
  );

  /* it(''
    , () => {

    }
  ); */

});

