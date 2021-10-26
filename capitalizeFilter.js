const capitalizeFilter = (arr) => {

  const newArr =  arr.map((cap) => cap.toUpperCase()).filter((fil) =>
    fil.charAt(0) !== 'f' && fil.charAt(0) !== 'F'


  );

  return newArr;

};

module.exports = capitalizeFilter;
