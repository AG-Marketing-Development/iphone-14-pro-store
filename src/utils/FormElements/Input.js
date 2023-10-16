import React, { useReducer, useEffect } from "react";

import './Input.css';
import { validate } from "../../utils/Validator/Validator";

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            };
        default:
            return state;
    }
};

const Input = props => {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '', 
        isValid: props.initialValid || false,
        isTouched: false
    });

    const {id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    },
    [id, onInput, value, isValid]);

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    };

    const changeHanlder = event => {
        let value = event.target.value;
        if (props.type === "tel") {
            value = value.replace(/[^\d]/g, '');  // Remove any non-digit characters
        }
    
        dispatch({
            type: 'CHANGE', 
            val: value, 
            validators: props.validators
        });
    };

    const element = 
    <input 
        id={props.id} 
        type={props.type}
        pattern={props.type === "tel" ? "\\d*" : undefined} 
        placeholder={props.placeholder} 
        onChange={changeHanlder}
        onBlur={touchHandler}
        value={inputState.value}
    />;


    return (
        <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    );
};

export default Input;