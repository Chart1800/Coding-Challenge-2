// The purpose of this project is to create a tip calculator capable of calculating a tip based on total bill

// U94741303

// Initial logic for calculating tip using ternary operator
    let bill = 275;
    let tipPercent = (bill >= 50 && bill <= 300) ? 0.15 : 0.2;
    let tip = bill * tipPercent;
    let total = tip + bill;


// Output details
console.log("The bill was $" + bill + ", the tip was $" + tip + ", and the total value $" + total);

// Create calcTip function
function calcTip(bill) {
    let tipPercent = (bill >= 50 && bill <= 300) ? 0.15 : 0.2;
    return bill * tipPercent;
}
// Test calcTip
tipTest = 100;
console.log(calcTip(tipTest));

//Implement and populate arrays for bills, tips, totals
// bills array
const bills = [275, 40, 430];
console.log(bills);

// Calc Tips for tip array
const tips = [];
let i = 0
while (i < bills.length) {
    tips[i] = calcTip(bills[i])
    i++;
}
console.log(tips);

// totals array
const totals = [];
i = 0;
while (i < bills.length) {
    totals[i] = tips[i] + bills[i];
    i++;
}
console.log(totals);