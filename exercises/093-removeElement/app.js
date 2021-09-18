// Write your function here
function removeElement(array,value){
    return array.filter(function(item){
        return item!==value;
    })
}