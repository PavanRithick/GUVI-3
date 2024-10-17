const printOddNumbers = function(arr) {
    return arr.filter(num => num % 2 !== 0);
  };
  console.log(printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  