(function(arr) {
    const titleCased = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    console.log(titleCased);
  })(['hello', 'world', 'javascript']);
  