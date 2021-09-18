// Write your function here
function select(array,object){
   for(var key in object){
       if(!array.includes(key)){
           delete object[key];
       }
   }
   return object;
}