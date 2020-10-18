let age = prompt("How old are you?");
if (age < 0) {
    console.log("Error");
} 
else if (age < 18) {
    console.log("Sorry, you are not old enough to enter the venue");
} 
else if (age < 21) {
    console.log("You can enter, but cannot drink");
}
else if (age === 21) {
    console.log("happy 21st birthday!!");
}
else if (Number.isInteger(Math.sqrt(age))) {
    console.log("perfect square!");
}
else if (age % 2 === 1) {
    console.log("your age is odd!");
}
else {
    console.log("Come on in. You can drink.");
}