import React from "react";

import Input from "../../utils/FormElements/Input";
import { VALIDATOR_EMAIL } from "../../utils/Validator/Validator"; 
import { useForm } from '../../utils/hooks/form-hook';
import { useHistory } from 'react-router-dom'; 
import './FormDetailContainer.css';
import Image1 from "../../utils/assets/mcafeeSecure.png";
import Image2 from "../../utils/assets/truste.png";
import Image3 from "../../utils/assets/veriSign.png";
import { useState } from "react";
import InputPhone from "../../utils/FormElements/InputPhone";
import partialsImport from '../utils/endPoints/partialsimport';


const FormDetailContainer = () => {
    const [formState, inputHandler] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            phone: {
                value: '',
                isValid: false
            }
        }, 
        false
    );

    const history = useHistory();
    const [inputValues, setInputValues] = useState({
        fname: '', 
        lname: '',
        email: '',
        phone: '',
      });
      
      const handleOnChange = (e) => {
    
      let { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
      };

      const submitHandler = (e) => {
        e.preventDefault();
        if (formState.isValid) {

            if (localStorage.getItem('partials') === null) {

                const transactionID = localStorage.getItem('transactionID');
                const affId = localStorage.getItem('affiliateID');
                const subaffId = localStorage.getItem('subAffiliateID');
                const email = inputValues.email;
                const phone = inputValues.phone;
                const fname = inputValues.fname;
                const lname = inputValues.lname;
                console.log(transactionID, affId, subaffId, email, phone, fname, lname);
                partialsImport({transactionID: transactionID,affid: affId, subaffId: subaffId, email: email, phone: phone, fname: fname, lname: lname})
                }
                localStorage['partials'] = 'true'; 

            
            const string = `${inputValues.fname}&${inputValues.lname}&${inputValues.email}&${inputValues.phone}`;
            history.push(`/checkout/${string}`);                
        } else {
            console.log('Form is not valid');
        }
    };

    return(
        <div className="form-container">
            <div className="header">
                <h1>Fill Out Your Details:</h1>
                <hr />
            </div>
             <form className="form" onSubmit={submitHandler}>
                <div className="name-container">
                    <input id='fname' name='fname' value={inputValues.fname} onChange={handleOnChange} type="text" placeholder="First Name" required />
                    <input id='lname'  name='lname'   onChange={handleOnChange} type="text" placeholder="Last Name" required />
                </div>                
                <Input 
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email."
                    onInput={inputHandler}
                    handleOnChange={handleOnChange}
                />  

                <InputPhone 
                    id="phone"
                    name="phone"
                    onInput={inputHandler}
                    handleOnChange={handleOnChange}
                />

                
                <button type="submit">Submit</button>
            </form>
                <div className="image-container">
                <img src={Image1} alt="Error Image1" />
                <img src={Image2} alt="Error Image2" />
                <img src={Image3} alt="Error Image3" />
            </div>
        </div>
    );
};

export default FormDetailContainer;
