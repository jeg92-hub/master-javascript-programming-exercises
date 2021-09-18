// Write your function here
function computeAverageOfNumbers(array){
    return array.length? array.reduce((a,b)=>a+b)/array.length:0;
}