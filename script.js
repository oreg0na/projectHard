"use strict";
# Усложненная задача 1
let arr = [
    23,
    43,
    47,
    55,
    65,
    74,
    94,
];

const sorter = function (arr) {
    arr.forEach(element => {
        if (element.toString()[0] == 2 || element.toString()[0] == 4) {
            console.log(element);
        }
    });
};

sorter(arr);
