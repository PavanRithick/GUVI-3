(function(arr) {
    const uniqueArray = [...new Set(arr)];
    console.log(uniqueArray);
  })([1, 2, 2, 3, 4, 4, 5]);
  