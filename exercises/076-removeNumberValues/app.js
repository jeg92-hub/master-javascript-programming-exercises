var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    for(var key in obj){
        if(typeof obj[key] === 'number'){
            delete obj[key];
        }
    }
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }