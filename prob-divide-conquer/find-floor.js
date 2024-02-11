function findFloor(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  if (num - 1 === arr[max]) {
    return arr[max];
  } else if (num < arr[min] || num > arr[max] + 1) {
    return -1;
  }
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (num === arr[mid] || (arr[mid] < num && num < arr[mid + 1])) {
      return arr[mid];
    } else if (arr[mid] > num) {
      max = mid - 1;
    } else if (arr[mid] < num) {
      min = mid + 1;
    }
  }
}

module.exports = findFloor;
