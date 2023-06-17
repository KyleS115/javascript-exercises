const sumAll = function(num1, num2) {
    let lesser = 0
    let greater = 0
    if ((typeof num1 === "number") && (typeof num2 === "number") && (num1 >= 0) && (num2 >= 0)) {
        if (num1 >= num2) {
            lesser += num2
            greater += num1
        } else {
            lesser += num1
            greater += num2
        }
        let currentSum = 0
        for (let i = lesser; i <= greater; i++) {
            currentSum += i
        };
        return (currentSum);
    } else {
        return ("ERROR");
    };
};

// Do not edit below this line
module.exports = sumAll;
