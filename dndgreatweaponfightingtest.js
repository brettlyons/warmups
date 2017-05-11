
function attackRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

function generateRollset(size) {
    var rolls = Array(size);
    for(var i = 0; i < size; i++) {
        rolls[i] = (attackRoll());
    }
    return rolls;
}

function sum(a, b) {
    return a + b;
}

function reRollLow(roll) {
    if(roll < 3) {
        return attackRoll();
    }
    else {
        return roll;
    }
}

function varianceTrial(rolls) {
    return rolls.map(reRollLow).reduce(sum) - rolls.reduce(sum);
}
var varianceList = [];
for(var i = 1; i < 10001; i++) {
    varianceList.push(varianceTrial(generateRollset(10)));
}
console.log("average extra damage total from d6's per combat encounter from great weapon fighting style assuming 10 damage rolls per encounter");
console.log((varianceList.reduce(sum) / 10000));



