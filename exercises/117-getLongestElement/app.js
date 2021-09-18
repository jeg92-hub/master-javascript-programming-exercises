function getLongestElement(arr) {
    // your code here
    if(arr.length>0){
        var longest = arr.shift();
        arr.forEach(function(item){
            if(item.length>longest.length){
                longest = item;
            }
        });
        return longest;
    }else{
        return '';
    }
}
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'