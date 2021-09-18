function sumDigits(num) {
    // your code here
    var isNeg = num < 0,
    numbers = (isNeg? String(num).slice(1) : String(num)).split('').map(Number);
    if (isNeg) numbers[0] *= -1;

    return numbers.reduce(function(a,b){ return a + b; });
}
var output = sumDigits(316);
console.log(output); // --> 4