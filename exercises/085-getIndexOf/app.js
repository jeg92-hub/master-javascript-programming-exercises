// Write your function here
function getIndexOf(char,string){
    var index = -1;
    for(var val in string){
        if(string[val] === char){
          return val;
        }
    }

    return index;
 }