import React from "react";
import logo from '../assets/logo.png';
import "../styles/bootstrap.scss"; // Ensure this path is correct
//import { Carousel } from "react-bootstrap";


export default function home(){
    return (
        <>
    
            <div>
                <h1>"Welcome to Springdale Public School</h1>
                <img src={logo} alt="school logo"></img>
            </div>


        </>
    )
}
