// Write your function here
function getFirstElementOfProperty(o,k){
    if(!k in o){
        return [];
    }else{
        return o[k].shift();
    }
}