import React from "react";
import * as Icons from './icons'; // 

//functional component named SimpleCounter, taking 'props' as an argument
const SecondsCounter = (props) => {
    // Destructuring the 'seconds' prop from the passed-in props
    const {seconds} = props;

    //here we calculate individual positions
    const posSix = Math.floor(seconds / 100000) % 10;
    const posFive = Math.floor(seconds / 10000) % 10;
    const posFour = Math.floor(seconds / 1000) % 10;
    const posThree = Math.floor(seconds / 100) % 10;
    const posTwo = Math.floor(seconds / 10) % 10;
    const posOne = Math.floor(seconds / 1) % 10;

    // Returning JSX (React elements) to be rendered
    return (
        <div className="outerBox">
            <div className="clockIcon">
                <Icons.ClockIcon />
            </div>

            {/*Displaying digits from the props argument.*/}
            <div className="posSix">{posSix}</div>
            <div className="posFive">{posFive}</div>
            <div className="posFour">{posFour}</div>
            <div className="posThree">{posThree}</div>
            <div className="posTwo">{posTwo}</div>
            <div className="posOne">{posOne}</div>
            
            <div className="clockIcon">
                <Icons.ClockIcon />
            </div>
            <div className="heartIcon col-12 text-center p-0 ms-0"> 
                <Icons.HeartIcon />
            </div>
        </div> 
        );
};
export default SecondsCounter;