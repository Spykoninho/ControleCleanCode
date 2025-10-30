
export function analyzeDiceRolls(rolls) {
    let response = 0;
    for(let i = 0; i<rolls.length; i++){
        for(let j = 0; j<5; j++){
            if(countNumberOccurencesInArray(rolls[i], rolls[i][j]) === 3) {
                return 28;
            }
            if(countNumberOccurencesInArray(rolls[i], rolls[i][j]) === 4) {
                return 35;
            }
            response+=rolls[i][j];
        }
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