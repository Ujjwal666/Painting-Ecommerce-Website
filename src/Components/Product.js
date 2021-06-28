import React from 'react';
import './Product.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider"
import {db} from "./Firebase/Firebase"

function Product({id,title,image,price,info,categories,sale,size}) {

	const [{basket,current,fav,user,item}, dispatch] = useStateValue();

	const addToBasket=()=>{
		//dispatch some action todata layer
		dispatch({
			type: 'ADD_TO_BASKET',
			item:{
				id: id,
				title: title,
				image: image,
				price: price,
				info: info,
				categories: categories,
				size: size,
			}
		})
	}

	const addToFav=()=>{
		//dispatch some action todata layer
		dispatch({
			type: 'ADD_TO_FAV',
			item:{
				id: id,
				title: title,
				image: image,
				price: price,
				info: info,
			}
		})
	}

	const addToCurrent=()=>{
		dispatch({
			type: 'ADD_TO_CURRENT',
			item:{
				id: id,
				title: title,
				image: image,
				price: price,
				info: info,
				categories: categories,
				size: size,
			} 
		})
	}

	return (
		
		<div className="product">
			{(sale == "true") && 
				<div className="offer">
					<p>Sale</p>
				</div>
			}
			<img 
				src={image} 
				alt="" 
			/>
			<div className="product_info">
				<p>{title}</p>
				<p className="product_price">
					<p>$</p>
					<p>{price}</p>
				</p>
			</div>
			<div className="icons">
				<Link to="/product_detail">
					<VisibilityIcon onClick={addToCurrent}/>
				</Link>	
				<FavoriteIcon onClick={addToFav} />
				<ShoppingCartIcon onClick={addToBasket} />
			</div>
		</div>
			
	)
}

export default Product