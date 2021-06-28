import React from 'react';
import add from './add.jpg';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import {useStateValue} from '../StateProvider'
import Header from "../Header"

function Checkout() {

	const [{basket}, dispatch] = useStateValue();
	return (
		<>
			<Header />
			<div className="checkout">
			  <div className="checkout_left">
				<img className="checkout_ad" src={add} alt="" />
	            <div>
	              <h2>Your Shopping Basket.</h2>
	              	<div>
	              		{basket.map(item=>(
			              	<CheckoutProduct 
			              		id={item.id}
			              		title={item.title}
			              		image={item.image}
			              		price={item.price}
			              	/>
		                ))}
	              	</div>
	            </div>  
			  </div>
			  <div className="checkout_right">
			  	<Subtotal />
			  </div>	
		    </div>
		</>    
	)
}

export default Checkout;