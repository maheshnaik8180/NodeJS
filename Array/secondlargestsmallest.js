let array = new Array();

for (let index = 0; index < 10; index++) {
    array[index] = Math.floor((Math.random() * 900) + 100);
}
console.log(array);

let largest = array[0];
let secondLargest = array[0]-1;
let smallest = array[0];
let secondSmallest = array[0] + 1;

for (let index = 1; index < array.length; index++) {
    if (array[index] > largest) {
        secondLargest = largest;
        largest = array[index];
    } else{
        if (array[index] > secondLargest) {
            secondLargest = array[index];
        }
    }

    if (array[index] < smallest) {
        secondSmallest = smallest;
        smallest = array[index];
    } else{
        if (array[index] < secondSmallest) {
            secondSmallest = array[index];
        }
    }
}

console.log("The Second Largest Number is: " + secondLargest);
console.log("The Second Smallest Number is: " + secondSmallest);