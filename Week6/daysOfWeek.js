// DEFINE YOUR FUNCTION BELOW:
let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
function returnDay(num) {
    if (num >= 8 || num <= 0) {
        return null;
    }
    return daysOfWeek[num-1]
}