import React from "react";

import './FormDetailContainer.css'
import Image1 from "../../utils/assets/mcafeeSecure.png";
import Image2 from "../../utils/assets/truste.png";
import Image3 from "../../utils/assets/veriSign.png";

const FormDetailContainer = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Submitted');
    };

    return(

        <div className="form-container">
            <div className="header">
                <h1>Fill Out Your Details:</h1>
                <hr />
            </div>
            
            <form className="form" onSubmit={submitHandler}>
                <div className="name-container">
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                </div>
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />
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