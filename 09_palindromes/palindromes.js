const palindromes = function (checkString) {
    cleanString = checkString.toLowerCase();
    cleanString = cleanString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    cleanString = cleanString.replace(/\s/g, '');
    reverseString = '';
    for (let b = checkString.length; b > 0; b--) {
        reverseString += cleanString.slice(b - 1, b);
    };
    if (cleanString === reverseString) {
        return (true);
    } else {
        return (false);
    };
};

// Do not edit below this line
module.exports = palindromes;
