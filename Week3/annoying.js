// var answer = prompt("Are we there yet?")

// while (answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("Are we there yet?")
// }

// alert("YAY, WE MADE IT!!!")
// if (answer === 'yes') {
//     alert("Yay, we made it!");
// } else {
//     var answer = prompt("Are we there yet?")
// }

//VERSION 2

var answer = prompt("Are we there yet?")

while (answer.indexOf("yes") === -1 && answer.indexOf("yea") === -1) {
    var answer = prompt("Are we there yet?");
}

alert("YAY, WE MADE IT!!!");