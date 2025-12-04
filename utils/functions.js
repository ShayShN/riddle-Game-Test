import r3Combine from "../riddles/r3Combine.js";
import {question as input} from "readline-sync";

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
    const sums = player.timesSeconds.reduce((a,b) => a + b, 0)
    console.log(`Total time: ${sums}`);
    console.log(`Time for answers avg: ${(sums) / player.timesSeconds.length}`);
}

export function askRiddle(riddleObj) {
    console.log(riddleObj['name']);
    console.log(riddleObj['taskDescription']);
    for (const k in riddleObj) {
        if (k === 'choices') {
            console.log(riddleObj[k]); 
        }
    }
    
    while (true) {
        const answer = String(input("enter your choice: "))
        if (answer === riddleObj.correctAnswer) {
            break
        }  
    } 
    
    
}
export function measureSolveTime(fn, arg) {
    const dateStart = Date.now()
    fn(arg)
    const dateEnd = Date.now()
    return dateEnd - dateStart
}