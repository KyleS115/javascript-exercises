const reverseString = function(anyTypeInput) {
    strInput = String(anyTypeInput)
    strLength = strInput.length
    strReversed = ""
    for (let i = strLength; i >= 0; i--) {
        strReversed += strInput.slice(i - 1, i)
    }
    return (strReversed)
};

// Do not edit below this line
module.exports = reverseString;
