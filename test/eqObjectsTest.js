const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("Tests for eqObjects()", () => {

  it("returns true for equal keys and values out of order"
    , () => {
      const cd = { c: "1", d: ["2", 3] };
      const dc = { d: ["2", 3], c: "1" };

      assert.deepEqual(
        eqObjects(cd, dc)
        , true
      );

    });

  it("returns false for equal keys, unequal value"
    ,() => {
      const cd = { c: "1", d: ["2", 3] };
      const cd2 = { c: "1", d: ["2", 3, 4] };

      assert.deepEqual(
        eqObjects(cd, cd2)
        , false
      );

    });

  it("returns false for unequal keys"
    ,() => {
      const thirdTestObj = {
        fName: "Roux",
        lName: "Woolf",
      };
      const fourthTestObj = {
        fName: "Roux",
        mName: "Vonn",
        lName: "Woolf"
      };

      assert.deepEqual(
        eqObjects(thirdTestObj, fourthTestObj)
        , false
      );

    });

  it("returns true for objects containing congruent nested objects"
    , () => {
      assert.deepEqual(
        eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })
      );
    });

  it("returns false for objects containing inconcgruent nested objects"
    , () => {
      assert.notDeepEqual(
        eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })
      );
    });

  it("returns false for objects containing inconcgruent nested objects"
    , () => {
      assert.notDeepEqual(
        eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })
      );
    });

  


});
