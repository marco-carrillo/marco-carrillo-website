import React from "react";
import "./style.css"

function ProjectInfo(props){
    console.log(props);
    return(
        <div className="carousel-item">
            <a href={props.appURL} target="_blank" rel="noopener noreferrer">
                <img src={require(`../../images/${props.picture}`)} className="d-block w-100" alt={props.name}/>
            </a>
        </div>
    )
}

export default ProjectInfo;