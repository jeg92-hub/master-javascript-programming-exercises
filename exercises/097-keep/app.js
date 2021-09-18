// Write your function here
function keep(array,value){
    return array.filter(function(item){
        return item===value;
    })
}