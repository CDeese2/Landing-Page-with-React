import React from "react";
import "../../styles/index.css";

function Cards(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-img-top" alt="this is where the picture was"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
}
export default Cards; 


