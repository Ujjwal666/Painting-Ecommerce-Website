import React from 'react';
import './CheckoutProduct/CheckoutProduct.css';
import {useStateValue} from './StateProvider'

function FavoriteProduct({id,title,image,price,info}) {
 	const[{fav},dispatch]=useStateValue();

	const removeFromFav=()=>{
		dispatch({
			type:"REMOVE_FROM_FAV",
         	id:id
       	})
	}
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct_image" src={image} alt="" />
			<div className="checkoutProduct_info">
               <p className="checkoutProduct_title">{title}</p>
               <p className="checkoutProduct_price">
                 <small>$</small>
                 <strong>{price}</strong>
               </p>
               <p className="checkProduct_info">{info}</p>   
		       <button className="fav_icon" onClick={removeFromFav}> Remove from favorites</button>
			</div>
		</div>
	)
}

export default FavoriteProduct;