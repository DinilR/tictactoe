import { SquareValue } from "../../type";

type squareProps = {
    value : SquareValue ,
    clickSquareHandler : ()=> void 
}
const Square: React.FC<squareProps> = (props) =>{
    return (
        <div className="square" onClick={props.clickSquareHandler}>
            {props.value}
        </div>
    )
}

export default Square;