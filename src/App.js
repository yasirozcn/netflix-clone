import "./App.css";
import React from "react";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import { auth } from "./firebase";
import { useEffect , useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Profiles from "./Pages/Profiles";

function App() {  
  const [user, setUser] = useState({})
    useEffect(()=>{
      auth.onAuthStateChanged((userAuth)=>{
        if(userAuth){
          setUser({email:userAuth.email,uid:userAuth.uid}); 
        }else{
          
        }
      });
     
    },[])

    console.log(user);
    console.log(user.email);

  return (
    <Router>
      {user.email=== undefined || user.uid === undefined ? (<LoginPage/>)
      :(<Routes>
        <Route exect path="/" element={<HomePage />}/> 
        <Route path="/profile" element={<Profiles user={user} setUser={setUser} />}/>
        
        </Routes>)}
      
    </Router>
   
  );
}

export default App;
