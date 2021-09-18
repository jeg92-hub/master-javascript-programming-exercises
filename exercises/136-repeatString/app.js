function repeatString(string, num) {
    // your code here
    var res ='';
    for(var i=0;i<num;i++){
        res +=string;
    }

    return res;
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'