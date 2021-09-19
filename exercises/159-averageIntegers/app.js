function average(num1, num2) {
  // process array of numbers
  var nums = [parseInt(num1),parseInt(num2)];
  return sum(nums)/nums.length;
}

function sum(numbers) {
    var res = 0;
    for(var i=0;i<numbers.length;i++){
      res += numbers[i];
    }
    return parseInt(res);
}