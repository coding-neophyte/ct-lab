const getName = require('./getName.js');
const copyPush = require('./copyPush.js');
const capitalizeFilter = require('./capitalizeFilter.js');
const fetchQuotes = require('./fetchQuotes.js');

describe('getName', () => {
  it('returns name property of an object', () => {
    const obj = { 'firstName': 'julius',
      age: 33  };
    const objName = getName(obj);
    expect(objName).toEqual('julius');
  });
});

describe('copyPush', () => {
  it('returns a new array with new item pushed to the end', () => {
    const array = [1, 2, 3, 4];

    expect(copyPush(array, 5)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('capitalizeFilter', () => {
  it('takes an array of strings capitalize all strings and filter out any string that starts with the letter F/f', () => {
    const array = ['code', 'cash', 'frequency', 'Fashion'];

    expect(capitalizeFilter(array)).toEqual(['CODE', 'CASH']);
  });
});

describe('fetchQuotes', () => {
  it('returns a single quote from api', async () => {
    const quotes = await fetchQuotes();


    expect(quotes).toEqual([[{ name: expect.any(String),
      image: expect.any(String),
      text: expect.any(String) }]]);
  });
});
