function isEven(number) {
    if (number % 2 === 0) {
        return true
    }
    return false;
}
// function isEven(num) {
//     return number % 2 === 0;
// }

function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
   }
   return result;
}

function kebabToSnake(string) {
    return string.replace('-', '_')
}