function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    var tax = 9.5;
    var tip = 15;
    var total = 0;
    total = (preTaxAndTipAmount*tax/100)+preTaxAndTipAmount
    total += preTaxAndTipAmount*tip/100;
    return total;
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9