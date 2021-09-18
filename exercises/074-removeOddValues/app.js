function removeOddValues(obj) {
    // your code here
    for(var key in obj){
        if(typeof obj[key] === 'number'){
            if(obj[key]%2!=0 ){
                delete obj[key];
            }
        }
    }
}