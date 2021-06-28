import React from 'react'
import './Subtotal.css'
import CurrrencyFormat from 'react-currency-format'
import {useStateValue} from "../StateProvider"
import {getBasketTotal} from "../Reducer"
import {useHistory} from "react-router-dom"

function Subtotal() {

	const history = useHistory();
	const [{user, basket}, dispatch] = useStateValue();

	return (
		<div className="subtotal">
			<CurrrencyFormat
	            renderText={(value)=>(
	              <>
	               <p>
	                 Subtotal ({basket?.length} items): <strong>{value}</strong>
	           	   </p>
	           	   <small className="subtotal_gift">
	           	     <input type="checkbox" />This order contains a gift
	           	   </small>
	           	  </> 
	           	)}
	               decimalScale={2}
	               value={getBasketTotal(basket)}
	               displayType={"text"}
	               thousandSeparator={true}
	               prefix={"$"}
		  />
		  {(user) ? 
		  		<button onClick={e => history.push('/payment')}> Proceed to Checkout</button>
		  		:
		  		<button onClick={e => history.push('/sign_in')}> Proceed to Checkout</button>
		  }
		  </div>
	)
}

export default Subtotal