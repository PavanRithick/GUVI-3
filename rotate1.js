(function(arr, k) {
    const rotation = k % arr.length; 
    const rotatedArray = arr.slice(-rotation).concat(arr.slice(0, -rotation));
    console.log(rotatedArray);
  })([1, 2, 3, 4, 5], 2);
  