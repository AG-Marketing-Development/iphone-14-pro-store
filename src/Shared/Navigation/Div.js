import React from "react";

import Timer from '../../utils/Timer/Timer'
import './Div.css';

const Div = props => {


    return (

        <div className={props.className}>

            <div className='First'>

                <h1>

                    {props.h1}

                </h1>

            </div>

            <div className='Second'>

                <h2>

                    {props.h2}

                </h2>

            </div>

            <div className='Third'>

                <h3 style={{display: "flex", flexDirection: "row"}}>
                    {props.h3 } <Timer></Timer>
                </h3>
                

            </div>

        </div>
        
    );

};

export default Div;