let birthdayMap = new Map();
let months = ["", "January", "February", "March",
              "April", "May", "June", "July", "August", 
              "September", "October", "November", "December"];
for (let i = 1; i <= 12; i++) {
    birthdayMap.set(months[i], new Array());
}

for (let i = 1; i <= 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1;
    birthdayMap.get(months[month]).push("person" + i);
}

console.log(birthdayMap);