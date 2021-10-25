// const getName = require('./utils.js');

describe('getName', () => {
  it('returns name property of an object', () => {
    const objName = getName();
  });
  expect(objName).toEqual('julius');
});
