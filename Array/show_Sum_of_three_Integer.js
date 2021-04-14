const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter the number of elements in an array: "));
let array = new Array();
for (let index = 0; index < number; index++) {
    array.push(parseInt(prompt("Enter the number: ")));
}

getTripletsWithSumZero(array);

function getTripletsWithSumZero(array) {
    for (let i = 0; i < array.length - 2; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
            for (let k = j + 1; k < array.length; k++) {
                if (array[i] + array[j] + array[k] == 0) {
                    console.log("[" + array[i] + ", " + array[j] + ", " + array[k] +"]\n");
                }
            }
        }
    }
}

