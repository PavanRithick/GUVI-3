const rotateArray = function(arr, k) {
    const rotation = k % arr.length; 
    return arr.slice(-rotation).concat(arr.slice(0, -rotation));
  };
  console.log(rotateArray([1, 2, 3, 4, 5], 2));
  