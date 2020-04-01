import React from "react";
import './style.css';

function Links(){

return(
    <div className="row toprow">
        <div className="col-sm-3 my-auto center">
            <img id="MCpic" src={require("../../images/MC.jpeg")} alt="Marco picture" />
        </div>
        <div className="col-sm-9">
            <ul>
                <a href={require("../../resume/Marco Carrillo Resume - 2020-01-10.pdf")} target="_blank" rel="noopener noreferrer">
                    <li>Open a PDF copy of my resume</li>
                </a>
                <a href="https://www.linkedin.com/in/marco-carrillo-mba-5a81181/" target="_blank" rel="noopener noreferrer">
                    <li>See my linkedin profile</li>
                </a>
                <a href="https://github.com/marco-carrillo" target="_blank" rel="noopener noreferrer">
                    <li>See my Github profile</li>
                </a>
                <a href="https://www.youtube.com/watch?v=PzJIvYNFN6c" target="_blank" rel="noopener noreferrer">
                    <li>10 Hours of relaxing music</li>
                </a>
                <a href="https://www.chicagobooth.edu/" target="_blank" rel="noopener noreferrer">
                    <li>Booth School of Management</li>
                </a>
                <a href="https://www.betagammasigma.org/home" target="_blank" rel="noopener noreferrer">
                    <li>Beta Gamma Sigma (ΒΓΣ) Honor Society</li>
                </a>
            </ul>
        </div>
    </div>
)
}

export default Links;