const onee = 1;
console.log('outside');

module.exports = function() {
  console.log('inside');
  /**
   * Increment input by 1
   * @return {number}
   * @param {number} input - The title of the book.
   */
  function one(input) {
    return input + onee;
  }

  /**
   * Increment input by 2
   * @return {number}
   * @param {number} input - The title of the book.
   */
  function two(input) {
    return input + 2;
  }

  return {
    one: one,
    two: two,
  };
};
