import { useState } from "react";
import { SquareValue } from "../../type";
import Square from "../Square/Square";

type BoardProps = {
    currentGame: SquareValue[],
    SquareClick: (value: number) => void
}

const Board: React.FC<BoardProps> = (props) =>{
    

    // const IncrementX = () =>{
    //     setX(x+1)
    // }
    const renderSquare = (value: number) => {
        return <Square clickSquareHandler={() => {props.SquareClick(value)}} value ={props.currentGame[value]}></Square>
    }

    

    return (
        <div className="board">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}

        </div>
        
            )
}

export default Board;