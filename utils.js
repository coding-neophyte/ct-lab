const getName = (objName) => {
  objName['firstName'] = 'julius';
  return objName.firstName;
};

module.exports = getName;
