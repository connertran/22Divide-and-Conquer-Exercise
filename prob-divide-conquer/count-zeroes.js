function findStartingIndex(arr) {
  let min = 0;
  let max = arr.length - 1;
  if (arr[min] === 0) {
    return min;
  } else if (arr[max] !== 0) {
    return null;
  }
  while (min <= max) {
    let midIndex = Math.floor((max + min) / 2);
    if (arr[midIndex] + arr[midIndex + 1] === 1) {
      return midIndex + 1;
    } else if (arr[midIndex] + arr[midIndex + 1] > 1) {
      min = midIndex + 1;
    } else {
      max = midIndex - 1;
    }
  }
}
function countZeroes(arr) {
  let startingIndex = findStartingIndex(arr);
  if (startingIndex === null) {
    return 0;
  }
  const correctPart = arr.slice(startingIndex, arr.length);
  return correctPart.length;
}
module.exports = countZeroes;
