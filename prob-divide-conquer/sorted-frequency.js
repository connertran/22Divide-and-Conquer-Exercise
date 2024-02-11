function findStart(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  let result = -1;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (arr[mid] === num) {
      result = mid;
      max = mid - 1;
    } else if (arr[mid] < num) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return result;
}

function findLast(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  let result = -1;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (arr[mid] === num) {
      result = mid;
      min = mid + 1;
    } else if (arr[mid] < num) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return result;
}
function sortedFrequency(arr, num) {
  const firstIndex = findStart(arr, num);
  const lastIndex = findLast(arr, num);
  if (firstIndex !== -1 && lastIndex !== -1) {
    return lastIndex - firstIndex + 1;
  } else {
    return -1;
  }
}

module.exports = sortedFrequency;
