// Write your function here
function getElementsGreaterThan10AtProperty(o,k){
    if(!k in o){
        return [];
    }else{
        return o[k].filter(function(item){
            return item > 10
        })
    }
}