import React from "react";

import IphoneContainer from '../IphoneContainer/IphoneContainer'
import IphoneDescriptionContainer from '../IphoneDescriptionContainer/IphoneDescriptionContainer'
import FormDetailContainer from '../FormDetailContainer/FormDetailContainer'
import IphoneSpecification from '../IphoneSpecification/IphoneSpecification'
import './Landing.css'

const Landing = () => {

    const url = new URL(window.location.href);
    const initialParams = url.searchParams;
    const affId = initialParams.get('AffiliateID');
    const subaffId = initialParams.get('SubAffiliateID');
    const transactionId = initialParams.get('Transaction_ID');
    localStorage['affiliateID'] = affId; 
    localStorage['subAffiliateID'] = subaffId;
    localStorage['transactionID'] = transactionId;

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