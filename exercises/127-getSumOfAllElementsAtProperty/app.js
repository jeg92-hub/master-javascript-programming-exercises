var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if(!key in obj || !Array.isArray(obj[key]) || obj[key].length==0){
        return 0;
    }else{
        return obj[key].reduce((a,b) => a+b)
    }
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13