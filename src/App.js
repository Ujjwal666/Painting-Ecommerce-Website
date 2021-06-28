import React,{useEffect} from "react";
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ProductPage from './Components/ProductPage';
import ProductDetail from './Components/ProductDetail';
import Checkout from './Components/Checkout/Checkout';
import FavoritePage from './Components/FavoritePage';
import SearchedProduct from './Components/SearchedProduct';
import Payment from './Components/Payment';
import Orders from './Components/Orders';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import LogIn from './Components/LogIn/LogIn';
import {auth} from './Components/Firebase/Firebase';
import {useStateValue} from './Components/StateProvider';
import About from './Components/About'
import ScrollToTop from './Components/ScrollToTop';
	
const promise = loadStripe(
	"pk_test_51J0uvcHVqeDSH7HeGmWep0BkpZIyq4NYkBQqTjskvthwpjxln1vcr9ZYDILV4g4URWHASpc5oXw0h5VXu7TuzZpf00dsiurq0b"
)

function App() {
  const[{}, dispath] = useStateValue();

  useEffect(() => {
  	//will run once when the app component laods(it's like an if statement in react)
  	auth.onAuthStateChanged(authUser => {
  		//console.log("the user email is", authUser.email)prints loged email

	  	if (authUser) {
	  		//the user just logged in/or was in
	  		dispath({
	  			type: 'SET_USER',
	  			user: authUser
	  		})
	  	} else {
	  		//user logged out
	  		dispath({
	  			type: 'SET_USER',
	  			user: null
	  		})
	  	}
  	})
  }, [])
  return (
  	<Router>
  		<ScrollToTop />
	    <div className="app">
	    	<Switch>
	    		<Route path="/about_us">
	    			<Header />
	    			<About />
	    			<Footer />
	    		</Route>
	    		<Route path="/sign_in">
	    			<LogIn />
	    		</Route>
	    		<Route path="/orders">
	    			<Header />
	    			<Orders />
	    		</Route>
	    		<Route path="/payment">
	    			<Header />
	    			<Elements stripe={promise}>
	    				<Payment />
	    			</Elements> 
	    			<Footer />
	    		</Route>
	    		<Route path="/searched_products">
	    			<SearchedProduct />
	    		</Route>
	    		<Route path="/favorites">
	    			<FavoritePage />
	    		</Route>
	    		<Route path="/checkout">
	    			<Checkout />
	    		</Route>
	    		<Route path="/product_detail">
	    			<ProductDetail />
	    			<Footer />
	    		</Route>
	    		<Route path="/products">
	    			<ProductPage />
	    			<Footer />
	    		</Route>
	    		<Route path="/">
	      			<Home />
	      			<Footer />	
	    		</Route>
	    	</Switch>	
	    </div>
	</Router>    
  );
}

export default App;
