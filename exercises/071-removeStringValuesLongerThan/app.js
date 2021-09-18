function removeStringValuesLongerThan(num, obj) {
    // your code here
    for(var key in obj){
        if(typeof obj[key] === 'string'){
            if(obj[key].length >num ){
                delete obj[key];
            }
        }
    }
}
