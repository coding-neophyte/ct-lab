const getName = require('./getName.js');
const copyPush = require('./copyPush.js');
const capitalizeFilter = require('./capitalizeFilter.js');

describe('getName', () => {
  it('returns name property of an object', () => {
    const obj = { 'firstName': expect.any(String),
      age: expect.any(Number) };
    const objName = getName(obj);
    expect(objName).toEqual(expect.any(String));
  });
});

describe('copyPush', () => {
  it('returns a new array with new item pushed to the end', () => {
    const array = [1, 2, 3, 4];

    expect(copyPush(array, 5)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('capitalizeFilter', () => {
  it('akes an array of strings capitalize all strings and filter out any string that starts with the letter F/f', () => {
      const array = [''];

      expect(capitalizeFilter(array).toEqual(['']));
  });
});
