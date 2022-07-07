import { SquareValue } from "../../type";
import NextPlayer from "./NextPlayer";

type moveProps = {
    history: SquareValue[][] | null,
    nextPlayer : String,
    timeTravel: (value:number) => void,
    winner: string | null; 
}
const Moves: React.FC<moveProps> = (props) => {
    return (
        <div>
            {
                props.winner ? <h1>Winner is : {props.winner}</h1> :
                <div>
                    
            <NextPlayer nextPlayer={props.nextPlayer}></NextPlayer>
            <ol>
                 <li onClick={()=>{props.timeTravel(-1)}}>Go to game start</li>
                    

                {props.history?.map((item,index)=>{
                    if(index == 0){
                        return;
                    }
                                        return <li  key={index} onClick={()=>{props.timeTravel(index)}}>Go to move # {index}</li>
                                    })}

                            </ol>
        
        
                </div>
            }
        </div>
    )

                }
export default Moves;