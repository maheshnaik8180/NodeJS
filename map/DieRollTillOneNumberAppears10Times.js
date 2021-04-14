let dieRollMap = new Map();
let flag = true;
while(flag) {
    let numOnDie = Math.floor(Math.random() * 6) + 1;
    if (dieRollMap.has(numOnDie)) {
        let count = dieRollMap.get(numOnDie);
        count++;
        dieRollMap.set(numOnDie, count);
    }
    else {
        dieRollMap.set(numOnDie, 1);
    }

    for (let key of dieRollMap.keys()) {
        if(dieRollMap.get(key) == 10) {
            flag = false;
            break;
        }
    }
}

let numThatAppearedMaxTimes;
let numThatAppearedLeast;
let minimumCountOfParticularNumber = 100;
console.log(dieRollMap);
for (let [key, value] of dieRollMap) {
    if(value == 10) {
        numThatAppearedMaxTimes = key;
    }
    
    if(value < minimumCountOfParticularNumber){
        minimumCountOfParticularNumber = value;
        numThatAppearedLeast = key;
    }
}
console.log("Number that appeared 10 times: " + numThatAppearedMaxTimes);
console.log("Number That appeared Least: " + numThatAppearedLeast);