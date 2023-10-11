import React from "react";

import IphoneContainer from '../IphoneContainer/IphoneContainer'
import IphoneDescriptionContainer from '../IphoneDescriptionContainer/IphoneDescriptionContainer'
import FormDetailContainer from '../FormDetailContainer/FormDetailContainer'
import IphoneSpecification from '../IphoneSpecification/IphoneSpecification'
import './Landing.css'

const Landing = () => {

    return(

        <React.Fragment>
        <div className="container">

            <div className="column">
                <IphoneContainer></IphoneContainer>
            </div>

            <div className="column">
                <IphoneDescriptionContainer></IphoneDescriptionContainer>
            </div>

            <div className="column">
                <FormDetailContainer></FormDetailContainer>
            </div>
        </div>

        <div className="iphone-specification-container">
            <IphoneSpecification></IphoneSpecification>
        </div>
        </React.Fragment>


        

    );
};





export default Landing;