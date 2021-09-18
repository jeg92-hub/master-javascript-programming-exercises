function removeArrayValues(obj) {
    // your code here
    for(var key in obj){
        if( obj[key].length){
            delete obj[key];
        }
    }
}