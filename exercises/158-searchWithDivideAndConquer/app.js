function search(array, value) {
  // your code here
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (array[mid] !== value && left <= right) {
      if (value < array[mid]) {
          right = mid - 1
      } else {
          left = mid + 1
      }
      mid = Math.floor((left + right) / 2);
  }
  if (array[mid] === value){
      return mid;
  } else {
      return null
  }
}

var arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // => 4