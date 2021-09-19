function findPairForSum(array, number){
    array = array.filter(x => (number>x)).sort(function(a, b) {
        return a-b;
      });
    var pair = [];
    var existPair = false;
    for(var i=0;i<array.length;i++){
        var firstNum = array[i];
        var secondNum = 0;
        for(var j=i+1;j<array.length;j++){
            var secondNum = array[j];
            if(number==(firstNum+secondNum)){
                existPair = true;
                break;
            }
        }

        if(existPair){
            pair.push(firstNum);
            pair.push(secondNum);
            break;
        }
    }
    return pair;
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]