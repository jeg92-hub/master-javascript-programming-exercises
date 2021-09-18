var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    for(var key in obj){
        if(typeof obj[key] === 'number'){
            if(obj[key] <num ){
                delete obj[key];
            }
        }
    }
}
