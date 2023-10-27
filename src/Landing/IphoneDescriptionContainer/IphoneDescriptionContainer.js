import React from "react";

import './IphoneDescriptionContainer.css'

const IphoneDescriptionContainer = () => {

    return(

        <div>
            <h1 style={{textAlign: "left"}} className="header-title">iPhone 15 Pro</h1>
            <p style={{textAlign: "left"}} className="description">Get a chance to win the new iPhone 15 Pro, Included in the  <br/> Gaming App trial</p>
            <div className="star-container">
                <ul className="star-style">
                    <li>&#11088;</li>
                    <li>&#11088;</li>
                    <li>&#11088;</li>
                    <li>&#11088;</li>
                    <li>&#11088;</li>
                </ul>
            </div>
            <hr/>
            {/* border: "2px solid blue", */}
            <div style={{ textAlign : "left", marginTop : "1.3em", paddingTop : ".3em", paddingBottom : "1.2em"}}>
                <span style={{color : "rgb(177, 39, 4)",
                             fontSize : "1.87rem",
                             fontWeight : "500"}} 
                      className="stock-description"><span className="exclamation-mark">!</span> 3 in stock</span> 
            </div>
            <hr/>
            <div style={{marginLeft : "20px", marginTop : "1.5em"}}>
                <ul style={{textAlign: "left", fontSize : "1.1rem", listStyleType : "disc"}} className="iphone-description-items">
                    <li>Height: 146.7mm</li>
                    <li>Width: 71.5mm</li>
                    <li>Depth: 7.65</li>
                    <li>Super Retina XDT display with ProMotion</li>
                    <li>6.1-inc (diagonal) all-screen OLED display</li>
                    <li>2532-by-1170-pixel resolution at 460 ppi</li>
                </ul>
            </div>
        </div>

    );
};





export default IphoneDescriptionContainer;