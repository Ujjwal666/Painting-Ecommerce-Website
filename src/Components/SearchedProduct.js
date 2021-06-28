import React,{useState,useEffect} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import Header from "./Header"
import './SearchedProduct.css'
import ProductData from "./Products.json"
import Product from "./Product"
import {useStateValue} from "./StateProvider"
import CloseIcon from '@material-ui/icons/Close';
import {Link} from "react-router-dom";

function SearchedProduct() {

	const [search,setSearch] = useState('')
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		setFilteredProducts(
			ProductData.filter((product)=>
				product.title.toLowerCase().includes(search.toLowerCase())
			)
		);
	},[search,ProductData]);

	return (
		<div className="searched_product">
			<div className="header_search">
				<input className="header_searchInput" 
				 type="text" 
				 onChange={e=> setSearch(e.target.value)}
				/>
				<SearchIcon className="header_searchIcon" />
				<Link to="/">
					<CloseIcon className="header_crossIcon" />
				</Link>	
			</div>
			<div className="search_product">
				{filteredProducts.map((product) => (
				    <Product id={product.id}
				     title={product.title} 
				     price={product.price}
				     image={product.image}  
				     info={product.info}
				    />
				))}
			</div>	
		</div>	
	)
}

export default SearchedProduct