var special = ['zeroth','first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
var deca = ['twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];

function stringifyNumber(n) {
  if (n < 20) return special[n];
  if (n%10 === 0) return deca[Math.floor(n/10)-2] + 'ieth';
  return deca[Math.floor(n/10)-2] + 'y-' + special[n%10];
}
function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

function detectOutlierValue(string) {
    // your code here
    var newArr = string.split(" ").map(x => parseInt(x));
    var evens = newArr.filter(num => num % 2 === 0);
    var odds = newArr.filter(num => num % 2 !== 0);
    if(evens.length==1){
        var index = newArr.indexOf(evens[0])+1;
        //return index+ " - "+ capitalize(stringifyNumber(index))+' numbers is even, while the rest of the numbers are odd';
    }else{
        var index = newArr.indexOf(odds[0])+1;
        //return index+ " - "+ capitalize(stringifyNumber(index))+" number is odd, while the rest of the numbers are even";
    }
    return index;
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2