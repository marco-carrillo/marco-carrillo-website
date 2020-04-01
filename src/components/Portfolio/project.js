import React from "react";
import './styles.css';

function Project(props){

    return(
        <div className="col-sm-3 my-3">
            <div className="card">
                <img src={require(`../../images/${props.picture}`)} className="card-img-top" alt="Prj Pic"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <a href={props.appURL} target="_blank" rel="noopener noreferrer" className="btn event_btnm">Application</a>
                    <a href={props.repURL} target="_blank" rel="noopener noreferrer" className="btn event_btnm">Repository</a>
                </div>
            </div>                            
        </div>
    )
}

export default Project;