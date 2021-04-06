const feetToMeter=0.3048;
console.log("42 inches to feet is "+feetToMeter*42); 

let lengthInFeet=60;
let breadthInFeet=40;
let areaInMeter=lengthInFeet*(feetToMeter)*breadthInFeet*(feetToMeter);
let areaOf25Plots=25*areaInMeter;

console.log("area of rectangle in meter is :"+areaInMeter);
console.log("area of 25 such plots is "+areaOf25Plots);
