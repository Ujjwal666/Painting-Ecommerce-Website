import React,{useState, useEffect} from 'react'
import './Payment.css'
import {useStateValue} from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct"
import {Link, useHistory} from "react-router-dom"
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import CurrrencyFormat from 'react-currency-format'
import {getBasketTotal} from "./Reducer"
import axios from "./axios"
import {db} from "./Firebase/Firebase"

function Payment() {
	const [{user,basket,fav}, dispatch] = useStateValue();
	const history = useHistory();
	
	const stripe = useStripe();
	const elements = useElements();

	const [succeeded,setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true); 
	const [clientSecret, setclientSecret] = useState(true)

	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [state, setState] = useState("");
	const [country, setCountry] = useState("");
	const [zip, setZip] = useState("");

	useEffect(() => {
		//generate the special stripe secret which allows us to charge a customer
		const getClientSecret = async () =>{
			const response = await axios({
				method: 'post',
				//stripe expects the total in a currencies subunits
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`
			});
			setclientSecret(response.data.clientSecret)
		}

		getClientSecret();

	}, [basket])

	console.log("Secret key", clientSecret)

	const handleSubmit = async (event) =>{
		//stripe stuff
		event.preventDefault();
		setProcessing(true);
      
		const payload= await stripe.confirmCardPayment(clientSecret,{
			payment_method:{
				card: elements.getElement(CardElement)
			}
		}).then(({paymentIntent})=>{

			console.log("fav",fav)
			console.log("basket",basket)
			 
			db
				.collection('users')
				.doc(user?.uid)
				.collection('orders')
				.doc(paymentIntent.id)
				.set({
					fav: basket,
					amount: paymentIntent.amount,
					created: paymentIntent.created,
					address: address+state+country+zip
				})

			setSucceeded(true);
			setError(null);
			setProcessing(false);

			dispatch({
				type: 'EMPTY_BASKET'
			})

			history.replace('/orders')
		})
	}

	const handleChange = event =>{
		//listen for changes in cardelement and display any errors as customer type the card details
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	}

	return (
		<div className="payment">
			<div className="payment_container">
				<h1>
					Checkout (
						<Link to="/checkout">{basket?.length} items</Link>
					)
				</h1>
				<div className="payment_section">
					<div className="payment_title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment_address">
						<div className="email contact">
							<p>Email: </p>
							<input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
						</div>
						<div className="address contact">	
							<p>Billing Street Address: </p>
							<input type="text" placeholder="Street Address" onChange={(e)=>setAddress(e.target.value)} />
						</div>
						<div className="scz">
							<div className="state contact">
								<p>State</p>
								<input type="text" placeholder="State" onChange={(e)=>setState(e.target.value)}/>
							</div>	
							<div className="country contact">
								<p>Country</p>
								<input type="text" placeholder="Country" onChange={(e)=>setCountry(e.target.value)} />
							</div>
							<div className="zip contact">
								<p>Zip Code </p>
							    <input type="text" placeholder="Zip Code" onChange={(e)=>setZip(e.target.value)} />
							</div>
						</div>	
					</div>
				</div>
				<div className="payment_section">
					<div className="payment_title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment_items">
						{basket.map(item => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								info={item.info}
							/>
						))}
					</div>
				</div>
				<div className="payment_section">
					<div className="payment_title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment_details">
						<form onSubmit={handleSubmit} >
							<CardElement onChange={handleChange} />
							<div className="payment_priceContainer">
								<CurrrencyFormat
						            renderText={(value)=>(
						              	<h3>Order Total: {value}</h3>
						           	)}
						               decimalScale={2}
						               value={getBasketTotal(basket)}
						               displayType={"text"}
						               thousandSeparator={true}
						               prefix={"$"}
							  />
							  <button disabled={processing || disabled || succeeded}>
							  	<span>
							  		{processing ? <p>Processing</p>: "Buy Now"}
							  	</span>
							  </button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Payment