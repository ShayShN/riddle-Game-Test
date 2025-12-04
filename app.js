import {question as input} from "readline-sync";
import r3Combine from "./riddles/r3Combine.js";
import { createPlayer, addSolveTime, showStats, askRiddle, measureSolveTime} from "./utils/functions.js";



function main() {
    const name = input("What is your name? : ")
    const createNewPlayer = createPlayer(name) 
    
    for (const r of r3Combine){
        const measure = measureSolveTime(askRiddle,r)
        addSolveTime(createNewPlayer, measure)

    }

    
    showStats(createNewPlayer)  
    }

main()