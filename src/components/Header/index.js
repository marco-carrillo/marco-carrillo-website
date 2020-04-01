import React from "react";
import './header.css';

function Header() {
    return(
        <div>
            <div id="logo" className="row mt-0">
                <img id="MClogo" src={require("../../images/MClogo.png")} alt="MC Logo"/> 
            </div>

            <div id="info" className="row">
                <div className="col-sm-1"></div>
                <div id="phone" className="col-sm-4"><i className="fas fa-phone-square-alt"></i>(615) 306-4887</div>
                <div className="col-sm-2"></div>
                <div id="email" className="col-sm-4"><i className="fas fa-envelope-open-text"></i>marco_carrillo@yahoo.com</div>
                <div className="col-sm-1"></div>
            </div>


            <div id="quote" className="row">
                <div className="col-sm-12">
                    <p>“Live as if you were to die tomorrow. Learn as if you were to live forever.”<span>– Mahatma Gandhi</span></p>
                </div>
            </div>
        </div>
    )
}

export default Header;