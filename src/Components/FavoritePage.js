import React from 'react'
import './FavoritePage.css'
import {useStateValue} from './StateProvider'
import FavoriteProduct from './FavoriteProduct'
import Header from "./Header"

function FavoritePage() {

	const [{fav}, dispatch] = useStateValue();

	return (
		<>
			<Header />
			<div className="favorite_page">
				<h2>Here is your favorite items</h2>
				<div className="favorite_list">
					{fav.map(item=>(
		              	<FavoriteProduct 
		              		id={item.id}
		              		title={item.title}
		              		image={item.image}
		              		price={item.price}
		              	/>
	              	))}
				</div>
			</div>
		</>	
	)
}

export default FavoritePage