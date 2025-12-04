import r3Combine from "../riddles/r3Combine.js";

export function  createPlayer(name) {
    return {
        'name': name,
        'timesSeconds': []
    }
}
export function addSolveTime(player, seconds) {
    player.timesSeconds.push(seconds / 1000)
}
export function showStats(player) {
    console.log(`Total time: ${player.timesSeconds}`);
    console.log(`Time for answers in Second: ${(player.timesSeconds) / r3Combine.length}`);
}



export function askRiddle(riddleObj) {
    let timeToAnswer = 0
    console.log(riddleObj.name);
    console.log(riddleObj.taskDescription);
    for (const k in riddleObj) {
        if (k === choices) {
            console.log(riddleObj.k); 
        }
    }
  while (true) {
            const dateNow = Date.now()
            let answer = String(input("enter your choice: "))
            if (answer !== r["correctAnswer"]) {
                continue
            }
            else{timeToAnswer += (Date.now() - dateNow);
             break}
        } 
    return timeToAnswer
}