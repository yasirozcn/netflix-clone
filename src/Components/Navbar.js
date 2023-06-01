import React from 'react'
import '../styles/navbar.css'
import {IoIosSearch} from 'react-icons/io'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  


  const transitionNavBar = () => {
    if(window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  })

  return (
    <div className={`navbar ${show && `navbar__bg`}`}>
        <div className='navbar__left'>
         <img className='navbar__logo' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix Logo' /> 
        </div>
        <div className='navbar__right'>
        <IoIosSearch className='navbar__search' />
        
        <img 
        onClick={()=>{navigate('/profile')}}
        className='navbar__avatar' 
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
         alt='Netflix Avatar' 

         />
        
        </div>
    </div>
  )
}

export default Navbar