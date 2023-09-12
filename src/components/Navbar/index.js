import React from 'react'
import { FaBars } from 'react-icons/fa'
import './index.css'

const Navbar = () => {

    return (
        <nav className='navbar-container'>
            <div style={{display:'flex'}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaaK0kiCOh630smz80jlQIkep94hKVpKRJa7vczkjm6uLGScYZJMnhq05FRrGYlHraqw&usqp=CAU" alt="companyLogo" style={{ height: '35px',marginTop:'10px'}} />
                <ul className='links'>
                    <li style={{marginRight:"10px"}}>Solutions</li>
                    <li style={{marginRight:"10px"}}>Pricing</li>
                    <li style={{marginRight:"10px"}}>Resources</li>
                </ul>
            </div>
            <div style={{display:"flex"}}>
                <ul className='login-start-links-container'>
                    <li className='login-link'>Login</li>
                    <div>
                    <li className='start-free-link'>Start free trial</li>

                    </div>
                    
                </ul>
                <div>
                    <button className='hamburger-button'><i><FaBars /></i></button>

                </div>

            </div>



        </nav>
    )
}

export default Navbar
