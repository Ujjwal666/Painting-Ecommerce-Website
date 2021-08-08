import React,{useState} from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import {useStateValue} from "./StateProvider"
import {db} from "./Firebase/Firebase"
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function Footer() {

	const [{user,basket}, dispatch] = useStateValue();
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("")

	const submit=event=>{
		event.preventDefault();
		db
			.collection('contacts')
			.add({
				email: email, 
				message: message, 
			})
			.then(()=>{
				//add submittted effect
			})
			.catch((error)=>{
				alert((error.message))
			})
		setEmail("")
		setMessage("")	
	}

	const scrollToTop=()=>{
		window.scrollTo({top:0, behavior: 'smooth'})
	}

	return (
		<div className="foter">
			<div className="footer">
			  <div className="foot">
			  	<h3 className="heading">Our Stores</h3>
			  	<p className="para"> We are currently only located in the online platform.<br />
			  		Feel free to contact us at the provided information.<br/>
			  		Email: nepalinters@gmail.com<br />
			  		Phone: (469)882-7730
			  	</p>
			  </div>
			  <div className="foot">
			  	<h3 className="heading">Blog posts</h3>
				<p className="headi">We are new and ready to hit the market.</p>
				<p className="para">Lets start the new journey where we will try to satisfy the
					need of people who loves paintings.
				</p>
				<p className="headi">Do wanna also be the part of this journey?</p>
				<p className="para">Lets go head to head. We are looking for artists who wanna showcase
					their talents and sell paintings.
				</p>  
			  </div>
			  <div className="foot">
			  	<h3 className="heading">Support</h3>
			  	<div className="first_second">
				  	<div className="first">
				  		<p className="para">Terms & Conditions</p>
				  		<p className="para">FAQ</p>
				  		<p className="para">Payment</p>
				  		<p className="para">Refunds</p>
				  		<p className="para">Track Order</p>
				  		<p className="para">Services</p>
				  		<p className="para">Privacy & Security</p>
				  	</div>
				  	<div className="first">
				  		<p className="para">Ordering</p>
				  		<p className="para">Shipping</p>
				  		<p className="para">Return Policy</p>
				  		<p className="para">Sign Up</p> 
				  	</div>
				</div>  	
			  </div>	
			  <div className="foot">
			  	<h3 className="heading">Contact Us</h3>
			  	<form>
			  		<input className="email input" type="email" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} />
			  		<textarea className="textform input" placeholder="Your Message.." onChange={(e)=>setMessage(e.target.value)}></textarea>
			  		<input className="button" type="submit" onClick={submit} value="Submit" />
			  	</form>	
			  </div>
			</div>
			<div className="arrow">
				<ExpandLessIcon onClick={scrollToTop} className="top_icon" />
			</div>	
			<div className="foooter">
			  	<p>Copyright © 2021 Nepalinters Inc. All Rights Reserved.</p>
			  	<div className="social_icons">
			  		<a href="https://www.facebook.com/Nepalinters-104948571838777">
				  		<FacebookIcon />
				  	</a>
				  	<a href="https://www.instagram.com/_nepalinters/">
				  		<InstagramIcon />
				  	</a>
				  	<TwitterIcon />
				</div>  	
			</div>
		</div>
	)
}

export default Footer