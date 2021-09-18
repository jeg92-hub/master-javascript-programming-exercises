// Write your function here
function getElementsThatEqual10AtProperty(o,k){
    if(!k in o){
        return [];
    }else{
        return o[k].filter(function(item){
            return item == 10
        })
    }
}