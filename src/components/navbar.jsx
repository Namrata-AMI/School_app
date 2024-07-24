import React from "react";
import { Link } from "react-router-dom";
import school_img from '../assets/kid.png';
import "../styles/bootstrap.scss"; // Ensure this path is correct
import '../styles/navbar.css';


export default function Navbar(){
    return(
        <>
    <div className="app-container">
        <nav className="navbar navbar-expand-lg bg-body-dark sticky-top">
             <div className="container-fluid">
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" to= "/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Academics</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Admissions</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Faculty</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Students</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Gallery</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        <div>
            <img src={school_img} alt="school" className="school_img"></img>
        </div>
        
</div>

        </>
    )
}