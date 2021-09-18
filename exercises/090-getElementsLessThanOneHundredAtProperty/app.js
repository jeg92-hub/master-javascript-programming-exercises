// Write your function here
function getElementsLessThan100AtProperty(o,k){
    if(!k in o){
        return [];
    }else{
        return o[k].filter(function(item){
            return item < 100
        })
    }
}