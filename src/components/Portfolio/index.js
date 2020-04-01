import React from "react";
import Project from "./project";
import Portfolio from "./portfolio";

function PrjPortfolio(){
    console.log(Portfolio);
    return(
        <div className="row my-4">
                {Portfolio.map(project=>(
                    <Project {...project} />
                ))}
        </div>
    );
};

export default PrjPortfolio;