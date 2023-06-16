const repeatString = function(stringInput, repeatTimes) {
    if (repeatTimes < 0) {
        return ("ERROR")
    } else {
        return (stringInput.repeat(repeatTimes))
    }
};
// Do not edit below this line
module.exports = repeatString;
