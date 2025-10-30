
export function analyzeDiceRolls(rolls) {
    let response = 0;
    let isBrelan = false;
    let isPair = false;

    for(let i = 0; i<rolls.length; i++){
        for(let j = 0; j<5; j++){
            if(countNumberOccurencesInArray(rolls[i], rolls[i][j]) === 2) {
                isPair = true;
            }
            if(countNumberOccurencesInArray(rolls[i], rolls[i][j]) === 3) {
                isBrelan = true;
            }
            if(countNumberOccurencesInArray(rolls[i], rolls[i][j]) === 4) {
                return 35;
            }
            response+=rolls[i][j];
        }
    }
    if(isBrelan && isPair){
        return 30;
    }
    if(isBrelan){
        return 28;
    }
    return response;
}

function countNumberOccurencesInArray(array, number){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === number){
            count++;
        }
    }
    return count;
}