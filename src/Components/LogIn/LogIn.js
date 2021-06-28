import React,{useState} from 'react';
import './LogIn.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../Firebase/Firebase';
import logo from '../logo.png';
import firebase from "firebase";

function LogIn() {
	const history=useHistory(); //useHistory for redirecting
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login=event=>{

      event.preventDefault();//t56his stops the refresh
      //login logic
      auth
        .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
          //looged in, redirect to homepage
          history.push("/");
        })
        .catch((error)=>alert(error.message));
    }

    const register=event=>{
      event.preventDefault();

      auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
          if (auth) {
            history.push('/')
          }
        })
        .catch(error=>alert(error.message))
    }

    const submit = () =>{
    	var provider = new firebase.auth.GoogleAuthProvider();
    	firebase.auth().signInWithPopup(provider).then(function(result){
    		var token = result.credential.accessToken;
    		var user = result.user;
    		history.push('/')
    	})
    	.catch(function(error){
    		console.log(error);
    	})
    }

	return (
		<div className="login">
		   <Link to="/">
          <img
            className="login_logo"
            src={logo}
            alt=""
          />
 		   </Link>
 		   <div className="login_container">
 		     <h1>SignIn</h1>
 		     <form>
               <h5>Email</h5>
               <input value={email} onChange={event=>setEmail(event.target.value)} type="email" />
               <h5>Password</h5>
               <input value={password} onChange={event=>setPassword(event.target.value)} type="password" />
               <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
             </form>
             <p>
               By signing-in you agree to Amazon's Conditions of Use & Sale.
               Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice.
 		     </p>
 		   <button onClick={register} type="submit" className="login_registerButton">Create your Amazon Account</button>
 		   <button onClick={submit} type="submit" className="login_registerButton">Login With Google</button>
 		   </div>
		</div>
	)
}

export default LogIn;