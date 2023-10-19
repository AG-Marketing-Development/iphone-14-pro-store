import React from "react";
import Input from "../../utils/FormElements/Input";
import { VALIDATOR_EMAIL, VALIDATOR_PHONE } from "../../utils/Validator/Validator"; 
import { useForm } from '../../utils/hooks/form-hook';
import { useHistory } from 'react-router-dom'; 
import './FormDetailContainer.css';
import Image1 from "../../utils/assets/mcafeeSecure.png";
import Image2 from "../../utils/assets/truste.png";
import Image3 from "../../utils/assets/veriSign.png";


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

    const submitHandler = (e) => {
        e.preventDefault();
        if (formState.isValid) {
            console.log('Submitted', formState.inputs);
            history.push('/checkout');
            
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
            
            <form className="form" action='/checkout'>
                <div className="name-container">
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                </div>
                
                <Input 
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email."
                    onInput={inputHandler}
                />
                
                <Input 
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    validators={[VALIDATOR_PHONE()]}
                    errorText="Please enter a valid US phone number."
                    onInput={inputHandler}
                />
                
                <button type="submit">Sudbmit</button>
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
