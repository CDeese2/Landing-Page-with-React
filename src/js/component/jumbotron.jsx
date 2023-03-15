
import React from "react";
import "../../styles/index.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron col-12 bg-light p-3 rounded">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </p>
    </div>
    )
}
export default Jumbotron; 



