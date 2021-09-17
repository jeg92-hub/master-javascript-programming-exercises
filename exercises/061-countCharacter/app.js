function countCharacter(str, char) {
    // your code here
    var count = 0;
    for(var i=0;i<str.length;i++){
        if(str[i] == char){
            count++;
        }
    }
    return count;
}