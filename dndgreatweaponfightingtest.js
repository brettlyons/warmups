function attackRoll(dice_size) {
    return Math.floor(Math.random() * dice_size) + 1;
}

// re-write suggestion -- decouple things at the bottom.
// generate non-gwf info too for comparison.

function generateRollset(dice_size, size) {
    var rolls = Array(size);
    for(var i = 0; i < size; i++) {
        rolls[i] = (attackRoll(dice_size));
    }
    return rolls;
}

function reRollLow(dice_size, roll) {
    if(roll < 3) {
        return attackRoll(dice_size);
    }
    else {
        return roll;
    }
}

function sum(a, b) {
    return a + b;
}

function varianceTrial(dice_size, rolls) {
    const reRollLowOne = function(roll) { return reRollLow(dice_size, roll); };
    return rolls.map(reRollLowOne).reduce(sum) - rolls.reduce(sum);
}

function generateFullInfo(dice_max, dmg_rolls_per_encounter) {
    var varianceList = [];
    var rollset_total = [];
    for(var i = 1; i < 10001; i++) {
        var rollset = generateRollset(dice_max, dmg_rolls_per_encounter);
        varianceList.push(varianceTrial(dice_max, rollset));
        rollset_total.push(rollset.reduce(sum));
    }
    console.log("average extra damage total from d" + dice_max + "'s per combat encounter from great weapon fighting style assuming " + dmg_rolls_per_encounter + " damage rolls per encounter");
    console.log((varianceList.reduce(sum) / 10000));
    console.log("average damage per encounter with d" + dice_max);
    console.log(rollset_total.reduce(sum) / 10000);
}

generateFullInfo(6, 10);
generateFullInfo(12, 5);
generateFullInfo(10, 5);
generateFullInfo(8, 5);
