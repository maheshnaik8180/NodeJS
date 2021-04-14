let array = new Array();

for (let i = 0; i < 10; i++) {
    array[i] = Math.floor((Math.random() * 900) + 100);
}
console.log(array);
{
for(let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] < array[j-1]) {
            var temp = array[j-1];
            array[j-1] = array[j];
                array[j] = temp;
        }
    }
}
console.log("The Second Largest Number is: " + array[array.length-2]);
console.log("The Second Smallest Number is: " + array[1]);
}