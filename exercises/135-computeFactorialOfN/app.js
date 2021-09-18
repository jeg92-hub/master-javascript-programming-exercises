function computeFactorialOfN(n) {
    // your code here
    var fact =1;
    for(var i=1;i<=n;i++){
        fact = fact * i;
    }
    return fact;
}

var output = computeFactorialOfN(3); console.log(output); // --> 6

var output = computeFactorialOfN(4); console.log(output); // --> 24