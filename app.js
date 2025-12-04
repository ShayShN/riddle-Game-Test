import {question as input} from "readline-sync";
import r3Combine from "./riddles/r3Combine.js";
import { createPlayer, addSolveTime, showStats, askRiddle} from "./utils/functions.js";



function main() {
    const name = input("What is your name? : ")
    const createNewPlayer = createPlayer(name) 
    askRiddeles(r3Combine)
    const askRiddeles = askRiddle(r3Combine)

    addSolveTime(createNewPlayer, createNewPlayer.timeToAnswer)
    showStats(createNewPlayer)  
  
    }

    
    

main()