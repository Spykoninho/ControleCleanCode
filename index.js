function countNumberOccurencesInArray(array, number){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === number){
            count++;
        }
    }
    return count;
}

function isGrandeSuite(roll){
    const sortedRoll = roll.sort();
    for(let i = 0; i < sortedRoll.length-1; i++){
        let nextValue = sortedRoll[i+1];
        if(sortedRoll[i] !== nextValue - 1){
            return false;
        }
    }
    return true;
}

function hasBrelan(roll){
    for(let i = 0; i < roll.length; i++){
        if(countNumberOccurencesInArray(roll, roll[i]) === 3){
            return true;
        }
    }
    return false;
}

function hasPair(roll){
    for(let i = 0; i < roll.length; i++){
        if(countNumberOccurencesInArray(roll, roll[i]) === 2){
            return true;
        }
    }
    return false;
}

function isFull(roll){
    let hasBrelanVariable = hasBrelan(roll);
    let hasPairVariable = hasPair(roll);
    
    return hasBrelanVariable && hasPairVariable;
}

function isCarre(roll){
    for(let i = 0; i < roll.length; i++){
        if(countNumberOccurencesInArray(roll, roll[i]) === 4){
            return true;
        }
    }
    return false;
}

function calculLuckyRollScore(roll){
    let score = 0;
    for(let i = 0; i < roll.length; i++){
        score += roll[i];
    }
    return score;
}

export function analyzeDiceRolls(rolls) {
    for(let i = 0; i<rolls.length; i++){
        if(isGrandeSuite(rolls[i])){
            return 40;
        }
        if(isFull(rolls[i])){
            return 30;
        }
        if(hasBrelan(rolls[i])){
            return 28;
        }
        if(isCarre(rolls[i])){
            return 35;
        }
        return calculLuckyRollScore(rolls[i]);
    }
}