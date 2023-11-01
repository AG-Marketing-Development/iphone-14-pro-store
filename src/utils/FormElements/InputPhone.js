import React, { useState } from "react";
import Input from "./Input";
import { VALIDATOR_PHONE, VALIDATOR_NUMBERONLY } from "../../utils/Validator/Validator";

const formatPhoneNumber = (value) => {





    const cleaned = ('' + value).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
        return '(' + match[1] + (match[2] ? ') ' + match[2] : '') + (match[3] ? '-' + match[3] : '');
    }
    return value;
};

const InputPhone = (props) => {
    const [displayedValue, setDisplayedValue] = useState('');

    const handlePhoneChange = (event) => {
        const formattedValue = formatPhoneNumber(event.target.value);
        setDisplayedValue(formattedValue);

        if (props.handleOnChange) {
            props.handleOnChange({
                ...event,
                target: {
                    ...event.target,
                    value: formattedValue.replace(/\D/g, '')  
                }
            });
        }
    };

    return (
        <Input 
            {...props}
            value={displayedValue}
            type="tel"
            placeholder="(xxx) xxx-xxxx"
            validators={[VALIDATOR_PHONE(), VALIDATOR_NUMBERONLY()]}
            errorText="Please enter a valid US phone number."
            handleOnChange={handlePhoneChange}
        />
    );
};

export default InputPhone;
