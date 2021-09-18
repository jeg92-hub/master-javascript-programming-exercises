function countNumberOfKeys(obj) {
    // your code here
    var count = 0;
    for(var key in obj){
        count++;
    }

    return count;
}