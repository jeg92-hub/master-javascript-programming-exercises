// Write your function here
function getLastElementOfProperty(o,k){
    if(!k in o){
        return undefined;
    }else{
        return o[k].pop();
    }
}