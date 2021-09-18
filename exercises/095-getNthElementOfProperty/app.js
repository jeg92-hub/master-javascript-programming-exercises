// Write your function here
function getNthElementOfProperty(o,k,n){
    if(!k in o){
        return undefined;
    }else{
        return o[k][n];
    }
}