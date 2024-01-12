//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap';

// include your styles into the webpack bundle
import "../styles/index.css";
import * as Icons from './component/icons'; // 
import SecondsCounter from './component/home';

let secondsCounter = 0; //Initializes the counter variable to keep track of the current count.

// Counter logic to update individual digit position every 100 milliseconds.
setInterval(()=>{
    secondsCounter++;

    //rendering app
    ReactDOM.render(
        <SecondsCounter seconds={secondsCounter} />,
            document.getElementById("app")
        );
}, 1000);


