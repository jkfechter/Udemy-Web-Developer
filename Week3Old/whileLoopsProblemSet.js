let loopOne = -10;
console.log("Print all numbers between -10 and 19")
while (loopOne < 20) {
    console.log(loopOne);
    loopOne++;
}
let loopTwo = 10;
console.log("Print all even numbers between 10 and 40")
while (loopTwo <= 40) {
    console.log(loopTwo);
    loopTwo+=2;
}
let loopThree = 300;
console.log("Print all odd numbers between 300 and 333")
while (loopThree <= 333) {
    if (loopThree%2 === 1) {
        console.log(loopThree);
    }
    loopThree++;
}
let loopFour = 5;
console.log("Print all numbers divisble by 5 AND 3 between 5 and 50")
while (loopFour <= 50) {
    if (loopFour % 5 === 0 && loopFour % 3 === 0) {
        console.log(loopFour);
    }
    loopFour++;
}