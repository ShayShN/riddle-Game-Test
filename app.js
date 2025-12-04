import {question as input} from "readline-sync";
import r3Combine from "./riddles/r3Combine.js";
import { createPlayer, addSolveTime, showStats, askRiddle} from "./utils/functions.js";



function main() {
    const name = input("What is your name? : ")
    const createNewPlayer = createPlayer(name) 
    
    for (const r of r3Combine){
        const funcAsk = askRiddle(r);
        addSolveTime(createNewPlayer, funcAsk)

    }

    
    showStats(createNewPlayer)  
    }

main()