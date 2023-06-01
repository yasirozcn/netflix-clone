import React from 'react'
import { auth } from "../firebase";
import '../styles/profile.css'


function Profiles({user,setUser}) {
  const signOut = () => {
    auth.signOut().then(() => {
      // Sign-out successful.
      setUser({email:undefined,uid:undefined})
    }).catch((error) => {
      // An error happened.
    });
  }

  const backToWatch = () => {
    window.location.href = '/'
  }

  return (
    <div className='profiles__container'>
      <div className='profiles__text'>
        <h1>WHO'S WATCHING</h1>
      </div>
      <div className='profiles__user'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Netflix Avatar' />
        <h1>{user.email}</h1>
      </div>
      <div className='profiles__buttons'>
      <button className='profiles__buton' onClick={backToWatch} >Back to watch</button>
      <button className='profiles__buton' onClick={signOut}>Sign Out</button>

      </div>
    </div>
  )
}

export default Profiles