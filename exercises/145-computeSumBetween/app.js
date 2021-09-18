function computeSumBetween(num1, num2) {
    // your code here
    if(num1>num2) return 0;
    var total = 0;
    for(var i=num1;i<num2;i++){
        total += i;
    }
    return total;
}

var output = computeSumBetween(2, 5);
console.log(output); // --> 9