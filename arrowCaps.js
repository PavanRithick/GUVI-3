const toTitleCase = (arr) => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
console.log(toTitleCase(['hello', 'world', 'javascript']));
