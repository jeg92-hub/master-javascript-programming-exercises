function getStringLength(string) {
    // your code here
    var total = 0;
    for(var key in string){
        total++
    }
    return total;
}

var output = getStringLength('hello');
console.log(output); // --> 5