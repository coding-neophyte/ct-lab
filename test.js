const getName = require('./utils.js');
const copyPush = require('./utils.js');

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
    const arr = [];
    copyPush(arr);

  });
});
