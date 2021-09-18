function findSmallestElement(arr) {
       // your code here
    if(arr.length>0){
        var smallest = arr.shift();
        arr.forEach(function(item){
            if(item<smallest){
                smallest = item;
            }
        });
        return smallest;
    }else{
        return 0;
    }
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1