// Write your function here
function getAverageOfElementsAtProperty(o,k){
    if(o.hasOwnProperty(k) && o[k].length>0){
        let total = 0;
        o[k].forEach(function(num){
            total +=num;
        });
        return total / o[k].length
    }else{
        return 0;
    }

}
