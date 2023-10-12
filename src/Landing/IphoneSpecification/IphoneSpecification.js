import React from "react";

import iphone from '../../utils/assets/apple-iphone-14-pro-2-main.jpg'
import './IphoneSpecification.css'

const IphoneSpecification = () => {

    return(

        <>
        <div className="global-description-container">
            <h1 className="brand-title">The New Iphone 14 Pro</h1>
            <p className="specification-text">
            It's a magical piece of tech 4. It's so fast most devices can't catch up. It has the newly developed cameras that can
            transform reality. it's the <br/> new Iphone 14 Pro.
            </p>
        </div>
        <div className="iphone-img-container" >
        <img className="iphone-img" src={iphone} alt="iphone-14-pro-2" />
        </div>
        <div className="winner-description-text">
            <p>
            A winner be selected from all eligible entrants. The iPhone 14 Pro winner will be directly contacted by email.
            </p>
        </div> 
        </>

    );
};





export default IphoneSpecification;