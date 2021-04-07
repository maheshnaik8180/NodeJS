let min = 1000;
let max = 0;

for (let i=0;i<5;i++) 
{
    var number = Math.floor(Math.random() * 999) + 100;
    if (number < min) {
        min = number;
    }

    if (number > max) {
        max = number;
    }
}

console.log("Minimum Number: " + min );
console.log(" Maximum Number: " + max);
