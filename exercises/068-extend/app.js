var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for(var key in obj2){
        if(obj1[key]==undefined){
            obj1[key] = obj2[key];
        }
    }
}