function isRotated(str1, str2) {
    // your code here
    var arr = str1.split("");
    var arr2 = str2.split("");
    arr.forEach(function(item){
        var index = arr2.indexOf(item);
        if(index!=-1){
            arr2.splice(index, 1);
        }
    })

    return (arr2.length==0);

}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false