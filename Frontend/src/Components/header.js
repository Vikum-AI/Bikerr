import React from 'react'
import Logo from '../Assets/Logo/Bikerr-logo-white.png'
import '../Styles/header.css'


export default function header() {
    return (
        <div className='header'>
            
            <header>
                
                
                    <img src= { Logo } alt="Bikerr-logo" />
                

                
                <ul className="nav-links">

                     <li> <a href="#"> Home </a> </li> 
                    {/* <li> <a href="#"> About </a> </li> */}
                    <li> <a href="#"> Bikes </a> </li>
                    <li> <a href="#"> Login </a> </li>

                    <button> Sign-up </button>

                </ul>
                

            </header>

        </div>
    )
}
