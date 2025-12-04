import {question as input} from "readline-sync";
import r3Combine from "./riddles/r3Combine.js";
import { createPlayer, addSolveTime, showStats, askRiddle} from "./utils/functions.js";



function main() {
    const name = input("What is your name? : ")
    const createNewPlayer = createPlayer(name) 
    askRiddeles(createNewPlayer)
    const askRiddeles = askRiddle(createNewPlayer)

    addSolveTime(createNewPlayer, createNewPlayer.timeToAnswer)
    showStats(createNewPlayer)  
  
    }

    
    

main()