# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of the curriculum at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @loganwoolf/lotide`

**Require it:**

`const _ = require('@loganwoolf/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(a, b)` : Compares two flat arrays. `log true || false`
* `assertEqual(a, b)` : Compares two primitives. `log true || false`
* `assertObjectsEqual(a, b)` : Compares two flat objects. `log true || false`
* `countLetters(a)` : Returns an object with each unique letter as keys, and occurences of each as value.
* `countOnly(a, b)` : Takes an array `(a)` of items, and returns an object with each unique list item as keys, and occurences of each as value. The object is filtered by object `(b)`, containing a number search keys with `true` value.
* `eqArrays(a, b)` : Compares two flat arrays. Returns a boolean `true` if they are identical.
* `eqObjects(a, b)` : Compares two flat objects. Returns a boolean `true` if they are identical.
* `findKey(a, fn)` : Takes an obj `(a)`, searches it for the first key that satisfies a given callback function `(fn)`, and returns that key. 
* `findKeyByValue(a, b)` : Takes an obj `(a)`, searches its values for `(b)`, and returns the parent key.
* `flatten(a)` : Returns an array that is flattened by one level from `(a)`.
* `head(a)` : Returns the first item in an array `(a)`.
* `letterPositions(a)` : Returns an object containing all unique elements of a string `(a)` as keys, and an array of zero-indexed positions of said elements as values.
* `map(a, fn)` : Returns a new array containing all of the elements of an input array `(a)` as modified by a given callback function `(fn)`.
* `middle(a)` : Returns either the middle or middle two values from a given array `(a)` as an array.
* `tail(a)` : Returns all but the first item in an array `(a)`
* `takeUntil(a, fn)` : Returns items from the beginning of array `(a)` until the callback function `(fn)` condition is met.
* `without(a, b)` : Returns an array that contains all the elements from an array `(a)`, but with those contained in another array `(b)` removed.