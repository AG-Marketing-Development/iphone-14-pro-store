import React, { useState } from "react";

import './LinksToModals.css';
import Modal from "../UIElements/Modal";
import ModalTermsContent from "./ModalTermsContent";

const LinksToModals = props => {

    const [ showModalTerms, setShowModalTerms ] = useState(false);
    const [ showModalRules, setShowModalRules ] = useState(false);
    const [ showModalPrivacy, setShowModalPrivacy ] = useState(false);

    const closeModalTermsHandler = () => {
        setShowModalTerms(false);
    }

    const openModalTermsHandler = () => {
        setShowModalTerms(true);
    }

    const closeModalRulesHandler = () => {
        setShowModalRules(false);
    }

    const openModalRulesHandler = () => {
        setShowModalRules(true);
    }

    const closeModalPrivacyHandler = () => {
        setShowModalPrivacy(false);
    }

    const openModalPrivacyHandler = () => {
        setShowModalPrivacy(true);
    }

    return(
        <React.Fragment>
        <Modal 
            show={showModalTerms}
            header="Terms & Conditions Overview"
            contentClass='modal-content'
            footerClass='modal-actions'
            closeModalHandler={closeModalTermsHandler}
            onCancel={closeModalTermsHandler}
        >
            <ModalTermsContent />

        </Modal>

        <Modal 
            show={showModalRules}
            header="OFFICIAL RULES"
            contentClass='modal-content'
            footerClass='modal-actions'
            closeModalHandler={closeModalRulesHandler}
            onCancel={closeModalRulesHandler}
        >
            <ModalTermsContent />

        </Modal>

        <Modal 
            show={showModalPrivacy}
            header="Privacy & Policy"
            contentClass='modal-content'
            footerClass='modal-actions'
            closeModalHandler={closeModalPrivacyHandler}
            onCancel={closeModalPrivacyHandler}
        >
            <ModalTermsContent />

        </Modal>

        <div className="footer-modals">    
            <a onClick={openModalTermsHandler}>Terms |</a>
            <a onClick={openModalRulesHandler}> Rules |</a>
            <a onClick={openModalPrivacyHandler}> Privacy </a>
        </div>
        </React.Fragment>
    );
};

export default LinksToModals;