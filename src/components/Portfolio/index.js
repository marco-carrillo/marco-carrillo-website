import React from "react";
import Project from "./project";
import Portfolio from "./portfolio";
import RowWrapper from "./rowwrapper";


function PrjPortfolio(){
    console.log(Portfolio);
    return(
        <div>
            <RowWrapper>
                {Portfolio.map(project=>(
                    <Project {...project} />
                ))}
            </RowWrapper>
        </div>
    );
};

export default PrjPortfolio;