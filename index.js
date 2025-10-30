const BRELAN_SCORE = 28;
const CARRE_SCORE = 35;
const FULL_SCORE = 30;
const GRANDE_SUITE_SCORE = 40;
const YAMS_SCORE = 50;

const YAMS_NUMBER_OF_DICE = 5;
const CARRE_NUMBER_OF_DICE = 4;
const BRELAN_NUMBER_OF_DICE = 3;
const PAIR_NUMBER_OF_DICE = 2;


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
        if(countNumberOccurencesInArray(roll, roll[i]) === BRELAN_NUMBER_OF_DICE){
            return true;
        }
    }
    return false;
}

function hasPair(roll){
    for(let i = 0; i < roll.length; i++){
        if(countNumberOccurencesInArray(roll, roll[i]) === PAIR_NUMBER_OF_DICE){
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
        if(countNumberOccurencesInArray(roll, roll[i]) === CARRE_NUMBER_OF_DICE){
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

function isYams(roll){
    for(let i = 0; i < roll.length; i++){
        if(countNumberOccurencesInArray(roll, roll[i]) === YAMS_NUMBER_OF_DICE){
            return true;
        }
    }
    return false;
}

export function analyzeDiceRolls(rolls) {
    let totalScore = 0;
    for(let i = 0; i<rolls.length; i++){
        if(isGrandeSuite(rolls[i])){
            totalScore += GRANDE_SUITE_SCORE;
        }else if(isFull(rolls[i])){
            totalScore += FULL_SCORE;
        }else if(hasBrelan(rolls[i])){
            totalScore += BRELAN_SCORE;
        }else if(isCarre(rolls[i])){
            totalScore += CARRE_SCORE;
        }else if(isYams(rolls[i])){
            totalScore += YAMS_SCORE;
        }else{
            totalScore += calculLuckyRollScore(rolls[i]);
        }
    }
    return totalScore;
}