const getName = (obj) => {
  obj = { 'firstName': 'julius',
    age: 33 };
  return obj['firstName'];
};

module.exports = getName;
