
export function analyzeDiceRolls(rolls) {
    let response = 0;
    let isBrelan=false;
    for(let i = 0; i<rolls.length; i++){
        for(let j = 0; j<5; j++){
            if(countNumberOccurencesInArray(rolls[i], rolls[i][j]) >= 3) {
                isBrelan = true;
                break;
            }
            response+=rolls[i][j];
        }
    }
    return isBrelan ? 28 : response;
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