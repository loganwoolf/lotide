const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("Tests for countOnly()", () => {

  it("returns correct test object"
    , () => {
      const firstNames = [
        "Karl",
        "Salima",
        "Agouhanna",
        "Fang",
        "Kavith",
        "Logan",
        "Jason",
        "Salima",
        "Fang",
        "Joe",
        "Logan",
        "Logan",
        "Logan"];
      const firstFilter = {
        "Logan": true,
        "Jason": true,
        "Karima": true,
        "Fang": true,
        "Agouhanna": false
      };
      const firstResult = countOnly(firstNames, firstFilter);
      const firstExpect = {"Logan": 4, "Jason": 1, "Fang": 2};

      assert.deepEqual(
        firstResult
        , firstExpect
      );

    }
  );

});