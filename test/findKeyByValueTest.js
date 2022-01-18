const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("Tests for findKeyByValue()", () => {

  it("returns the correct key given a value"
    , () => {
      const bestTVShowsByGenre = {
        sciFi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire"
      };

      assert.strictEqual(
        findKeyByValue(bestTVShowsByGenre, "The Wire")
        , "drama"
      );

    });

  it("returns undefined when value does not exist"
    ,() => {
      const bestTVShowsByGenre = {
        sciFi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire"
      };

      assert.strictEqual(
        findKeyByValue(bestTVShowsByGenre, "That 70's Show")
        , undefined
      );

    });

});