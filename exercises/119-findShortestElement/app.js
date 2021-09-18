function findShortestElement(arr) {
    // your code here
    if(arr.length>0){
        var shortest = arr.shift();
        arr.forEach(function(item){
            if(item.length<shortest.length){
                shortest = item;
            }
        });
        return shortest;
    }else{
        return "";
    }
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'