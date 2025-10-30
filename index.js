export function analyzeDiceRolls(rolls) {
    let response = 0;
    for(let i = 0; i<rolls.length; i++){
        for(let j = 0; j<5; j++){
            response+=rolls[i][j];
        }
    }
    return response;
}