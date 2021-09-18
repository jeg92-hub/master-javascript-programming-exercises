function getLargestElement(arr) {
      // your code here
      if(arr.length>0){
        var largest = arr.shift();
        arr.forEach(function(item){
            if(item>largest){
              largest = item;
            }
        });
        return largest;
    }else{
        return 0;
    }
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;