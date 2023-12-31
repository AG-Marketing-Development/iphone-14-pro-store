import React from "react";
import clicks from '../../utils/endPoints/clickimport'
import IphoneContainer from '../IphoneContainer/IphoneContainer'
import IphoneDescriptionContainer from '../IphoneDescriptionContainer/IphoneDescriptionContainer'
import FormDetailContainer from '../FormDetailContainer/FormDetailContainer'
import IphoneSpecification from '../IphoneSpecification/IphoneSpecification'
import './Landing.css'

const Landing = () => {

    const url = new URL(window.location.href);
    const initialParams = url.searchParams;
    const affId = initialParams.get('affiliateID');
    const subaffId = initialParams.get('subAffiliateID');
    const transactionId = initialParams.get('transactionID');
    localStorage['affiliateID'] = affId; 
    localStorage['subAffiliateID'] = subaffId;
    localStorage['transactionID'] = transactionId;
    console.log(localStorage.getItem('visitorunique'));
    if (localStorage.getItem('visitorunique') === null) {
        clicks({affid: affId, subaffId: subaffId,transactionID: transactionId});
      }

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