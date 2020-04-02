import React from "react";
import Portfolio from "../Portfolio/portfolio";
import ProjectInfo from "./projectinfo";

function PortCarr() {
    console.log(Portfolio);

    return(
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            {Portfolio.map(project=>(
                <ProjectInfo {...project} />
            ))}
        </div>
        <a className="carousel-control-prev text-primary" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span><i className="fa fa-arrow-circle-left fa-2x"></i></span>
        </a>

        <a className="carousel-control-next text-primary" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span><i className="fa fa-arrow-circle-right fa-2x"></i></span>
        </a>
    </div> 
)
}

export default PortCarr;