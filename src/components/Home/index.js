import React from "react";
import './style.css';

function Home(){
    return (
            <div className="row toprow">
                <div className="col-sm-3 my-auto center">
                    <img id="MCpic" src={require("../../images/MC.jpeg")} alt="Marco picture" />
                </div>
                <div className="col-sm-8">
                    <ul>
                        <li>My wife <span className="emph">Lilian</span> and I have been married for over <span className="emph">20 years</span> and together we have four wonderful kids: <span className="emph">Kayla, Christopher, Carol and Kelsey</span></li>
                        <li>We live in the subdivision of <span className="emph">Westerleigh</span> in Moseley, VA, one of the most family-oriented neighborhoods in the greater Richmond area</li>
                        <li>Top-notch schools attracted us.  <span className="emph">Quality of life</span> keep us here</li>
                        <li>Engineer by training, got my <span class="emph">MBA</span> at the University of Chicago Booth School of Business.  My passion is to solve complex problems by breaking them down into simple, small, digestible and <span class="emph">addressable</span> issues</li>
                        <li>I believe you should never stop <span className="emph">learning</span>.  Currently, learning full stack development</li>
                    </ul>
                </div>
            </div>
    )
}

export default Home;