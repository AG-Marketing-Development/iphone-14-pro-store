import React from "react";

import './MainFooter.css';
import LinksToModals from "./LinksToModals";

const MainFooter = () => {

    return(
        <React.Fragment>
            <div>
                <footer style={{height : "30vh"}}>
                    <div className="participate-container">
                        <p>
                        Participate before it's too late!
                        </p>
                    </div>

                    <div className="terms-container">
                        <p>
                        <strong>CONGRATULATIONS!</strong> You are a winner of a iPhone 14 Pro Sweepstakes entry. <strong>NO PURCHASE NECESSARY. A PURCHASE WILL NOT INCREASE YOUR</strong> <br/> <strong>CHANCE OF WINNING.</strong> The price to enter online is $1.95. Open to legal residents of the 50 United States and D.C. who are 18 years of age or older as of the <br/> Sweepstakes start date. Sweepstakes ends on the last day of October 2023. For entry and official rules with complete eligibility, prize descriptions, odds <br/> disclosure, and other details, see Official Rules. Void where prohibited.
                        </p>
                    </div>
                    <div className="link-conditions-container">
                        <LinksToModals />
                    </div>
                </footer>
            </div>
        </React.Fragment>
    );
};

export default MainFooter;