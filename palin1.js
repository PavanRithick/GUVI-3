(function(arr) {
    const isPalindrome = str => str === str.split('').reverse().join('');
    const palindromes = arr.filter(isPalindrome);
    console.log(palindromes);
  })(['madam', 'racecar', 'hello', 'world']);
  