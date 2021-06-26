import React,{useState,useEffect}from 'react'
import "./Nav.css"
function Navbar() {
    const[show,handleShow] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            handleShow(true);
        }else handleShow(false);
    });
      return()=>{
          window.removeEventListener("scroll");
      };         
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="netflix logo"
            />
            <img
            className="nav_avatar"
            src="https://occ-0-3374-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZAl_RHxQaFudkiao5vPLVFhEyGG1QqTCFxjdy4hEOrxzY9GGUa2IoZyznfP4TitB2zLMNPgY_RK74GZJufj7ek.png?r=a41"
            />
        </div>
    )
}

export default Navbar
 