import { useEffect, useState } from "react";
import { SquareValue } from "../../type";
import Board from "../Board/Board";
import Moves from "../Moves/Moves";

const Game: React.FC = ( ) => {
    const [currentGame,setCurrentGame] = useState<SquareValue[]>(Array(9).fill(null));
    const [nextPlayer,setNextPlayer] = useState("X");
    const [winner,setWinener] = useState<string | null>(null);
    const [history,sethistory] = useState<SquareValue[][] | null>(null);

    const SquareClick = (value:number) => {
        if (currentGame[value] != null) return;
        let currentGameTemp = currentGame.slice();
        
        if(nextPlayer == "X"){
            currentGameTemp[value] = "X";
            setNextPlayer("O");
        }else{
            currentGameTemp[value] = "O";
            setNextPlayer("X");
        }
        setCurrentGame(currentGameTemp);
        // let historyTemp = history?history?.slice() : [];
        // historyTemp?.push(currentGame);
        // sethistory(historyTemp);
    }

    useEffect(() => {
        let historyTemp = history?history?.slice() : [];

        historyTemp?.push(currentGame);
        sethistory(historyTemp);
        checkWinner();
    },[currentGame])

    // useEffect(()=>{
    //     console.log(history);
    // },[history])
    const TimeTravelhandler = (value:number) =>{
        if(!history) return;
        let temp = history[value];
        let historyTemp = history.slice(0,value); 
        if(value == -1){
            setCurrentGame(Array(9).fill(null));
            sethistory([]);
        }else{
            setCurrentGame(history[value]);
            sethistory(historyTemp);
        }
         
        
        // setCurrentGame(history[value]);
    }

    const checkWinner = () =>{
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for(let i = 0;i<lines.length;i++){
            const [a,b,c] = lines[i];
            if(currentGame[a] && currentGame[a] === currentGame[b] && currentGame[a] === currentGame[c]){
                setWinener(currentGame[a]);
            }
        }
        return null;
    }


    return (
        <div>
            <Board SquareClick={value => SquareClick(value)} currentGame={currentGame}></Board>
            <Moves winner={winner} history={history} nextPlayer={nextPlayer} timeTravel={value=>{TimeTravelhandler(value)}}></Moves>

        </div>
        
    )
}

export default Game;