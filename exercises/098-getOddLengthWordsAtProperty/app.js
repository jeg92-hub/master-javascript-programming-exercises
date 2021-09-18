// Write your function here
function getOddLengthWordsAtProperty(o,k){
    if(!k in o){
        return undefined;
    }else{
        return o[k].filter(function(item){
            return item.length%2!==0;
        })
    }
}