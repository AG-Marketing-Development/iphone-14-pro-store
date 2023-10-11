import React from "react";
import ReactDOM  from "react-dom";
import { CSSTransition } from "react-transition-group";

import './Modal.css';
import Backdrop from "./Backdrop";

const ModalOverlay = props => {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <div className={`modal__header ${props.className}`}>
                <h2>{props.header}</h2>
                <button className="cancel-button" onClick={props.closeModalHandler}>x</button>
            </div>
            <div>
                <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
                    <div className={`modal__content ${props.contentClass}`}>
                        {props.children}
                    </div>
                </form>
            </div>
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancel}/>}
            <CSSTransition
            in={props.show}
            mountOnEnter
            unmountOnExit
            timeout={200}
            classNames='modal'
            >
                <ModalOverlay {...props}/>
            </CSSTransition>
        </React.Fragment>
    );
};

export default Modal;