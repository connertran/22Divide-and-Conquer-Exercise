function findRotationCount(arr) {
  let min = 0;
  let max = arr.length - 1;
  if (arr[min] < arr[max] || arr.length === 1) {
    return 0;
  }
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    } else if (arr[min] <= arr[mid]) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
}

module.exports = findRotationCount;
