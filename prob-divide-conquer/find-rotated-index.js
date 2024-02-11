function findPivot(arr) {
  // find the index of the smallest number in the array
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) {
    return 0;
  }
  let min = 0;
  let max = arr.length - 1;
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

function findFromPivot(arr, num) {
  if (arr.length === 0) {
    return -1;
  }
  let pivot = findPivot(arr);
  let firstPart = arr.slice(pivot, arr.length);
  let firstPartmin = 0;
  let firstPartmax = firstPart.length - 1;
  while (firstPartmin <= firstPartmax) {
    let mid = Math.floor((firstPartmin + firstPartmax) / 2);
    if (num === firstPart[mid]) {
      return mid + pivot;
    } else if (num < firstPart[mid]) {
      firstPartmax = mid - 1;
    } else {
      firstPartmin = mid + 1;
    }
  }
  return -1;
}

function findToPivot(arr, num) {
  if (arr.length === 0) {
    return -1;
  }
  let pivot = findPivot(arr);
  let secondPart = arr.slice(0, pivot);
  let secPartmin = 0;
  let secPartmax = secondPart.length - 1;
  while (secPartmin <= secPartmax) {
    let mid = Math.floor((secPartmin + secPartmax) / 2);
    if (num === secondPart[mid]) {
      return mid;
    } else if (num < secondPart[mid]) {
      secPartmax = mid - 1;
    } else {
      secPartmin = mid + 1;
    }
  }
  return -1;
}

function findRotatedIndex(arr, num) {
  const indexFromPivot = findFromPivot(arr, num);
  const indexToPivot = findToPivot(arr, num);

  return Math.max(indexFromPivot, indexToPivot, -1);
}

module.exports = findRotatedIndex;
