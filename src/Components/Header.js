import React,{useState,useEffect} from 'react';
import './Header.css';
import logo from './logo.png';
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider"
import ProductData from "./Products.json"
import Product from "./Product"
import ProductPage from "./ProductPage"
import {auth} from "./Firebase/Firebase"

function Header() {

	const [{basket,fav,user}, dispatch] = useStateValue();

	//to signout
	const handleAuthentication = () => {
		if(user){
			auth.signOut();
		}
	}

	const scrollToBottom=()=>{
		window.scrollTo({top:document.body.scrollHeight, behavior: 'smooth'})
	}

	return (
		<div className="header">
			<div className='header_up'>
				<Link to="/">
					<img
						className="header_logo"
						src={logo}
					/>
				</Link>	
				<div className="header_searchs">
					<Link to="/searched_products">
						<div className="header_search">
							<input className="header_searchInput" type="text" 
							/>
							<SearchIcon className="header_searchIcon" />
						</div>	
					</Link>	
				</div>	
				<div className="header_nav">
					<Link to={!user && '/sign_in'}>
						<div onClick={handleAuthentication} className="header_option signin">
							<span className="header_optionLineOne">Hello {user ? user?.email : 'Guest'}</span>
							<span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
						</div>
					</Link>	
					<Link to="/orders">
						<div className="header_option">
							<span className="header_optionLineOne">Returns</span>
							<span className="header_optionLineTwo">Orders</span>
						</div>
					</Link>	
					<Link to="/favorites">
						<div className="header_optionFavorite">
							<FavoriteIcon />
							<span className="header_optionLineTwo header_count header_favoriteCount">{fav?.length}</span>
						</div>
					</Link>	
					<Link to="/checkout">
						<div className="header_optionBasket">
							<ShoppingBasketIcon />
							<span className="header_optionLineTwo header_count header_basketCount">{basket?.length}</span>
						</div>
					</Link>	
				</div>
			</div>
			<Link to="/searched_products">
				<div className="header_search_hide">
					<input className="header_searchInput" type="text" />
					<SearchIcon className="header_searchIcon" />
				</div>
			</Link>		
			<div className="header_down">
				<Link to='/'>
					<a>Home</a>
				</Link>	
				<Link to='/products'>
  					<a>Products</a>
  				</Link>	
  				<a onClick={scrollToBottom}>Contact Us</a>
  				<Link to="/about_us">
  					<a href="#about">About Us</a>
  				</Link>	
			</div>
		</div>
	)
}	

export default Header
