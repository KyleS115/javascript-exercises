const fibonacci = function(arrayLength) {
    if (parseInt(arrayLength) > 0) {
        fiboArray = [1, 1];
        fiboArray.length = parseInt(arrayLength);
        for (let i = 2; i < parseInt(arrayLength); i++) {
            fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
        };
        return fiboArray[parseInt(arrayLength) - 1];
    } else {
        return 'OOPS';
    };
    
};

// Do not edit below this line
module.exports = fibonacci;
