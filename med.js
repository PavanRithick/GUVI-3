const findMedianSortedArrays = function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = merged.length / 2;
    return mid % 1 !== 0 ? merged[Math.floor(mid)] : (merged[mid - 1] + merged[mid]) / 2;
  };
  console.log(findMedianSortedArrays([1, 3], [2, 4]));
  