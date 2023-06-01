import React from 'react'
import '../styles/signIn.css'
import { useRef } from 'react'
import { auth } from '../firebase'



function SignInScreen() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

   const signUp = (e) => {
     e.preventDefault()
     auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
     ).then((authUser)=>{
        
        emailRef.current.value = "";
        passwordRef.current.value = "";
        alert('Account Created')
      }).catch((error)=>{
        alert(error.message)
      })
   }

   const signIn = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      ).then((authUser)=>{
        emailRef.current.value = "";
        passwordRef.current.value = "";
        alert('Sign In')
      }).catch((error)=>{
        alert(error.message)
      })
   }

   

  return (
    <div className='signinContainer'>
        <form className='signin__form' onSubmit={(e)=>{e.preventDefault()}}>
        <h1>Sign In</h1>
        <input ref={emailRef} type='email' placeholder='Email'/>
        <input  ref={passwordRef} type='password' placeholder='Password'/>
        <button type='submit' onClick={signIn}> Sign In</button>
       
        
        <p>New to Netlix ? <span onClick={signUp}>Sign Up now.</span> </p>
        </form>    
    </div>
  )
}

export default SignInScreen