const getPalindromes = (arr) => arr.filter(str => str === str.split('').reverse().join(''));
console.log(getPalindromes(['madam', 'racecar', 'hello', 'world']));
