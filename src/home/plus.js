const onee = 1;
console.log('outside');

module.exports = function() {
  console.log('inside');
  function one(input) {
    return input + onee;
  }

  function two(input) {
    return input + 2;
  }

  return {
    one: one,
    two: two,
  };
};
