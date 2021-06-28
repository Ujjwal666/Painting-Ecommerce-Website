import React from 'react'
import './ProductPage.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Product from './Product'
import FilterListIcon from '@material-ui/icons/FilterList';
import Categories from './Categories'

function ProductPage() {
	return (
		<div className="product_page">
			<div className="products_list_top">
				<div className="filter">
					<p>Filter By</p>
					<FilterListIcon className="filter_icon" />
				</div>
				<div className="products_list">
					<div className="sort">
						<p>Sort By</p>
						<div className="dropdown">
							<div className="drop">
								<p>Default</p>
								<ArrowDropDownIcon className="arrowdown" />
							</div>
							<div className="dropdown_content">
								<p>Price(low to high)</p>
								<p>Price(high to low)</p>
							</div>
						</div>
					</div>
				</div>
			</div>		
			<div className="products_list_bottom">
				<div className="filter_lists">
					<div className="painting_categories design">
						<p>Categories</p>
						<Categories />
						<Categories />
						<Categories />
						<Categories />
						<Categories />
						<Categories />
					</div>
					<div className="painting_styles design">
						<p>Styles</p>
						<Categories />
						<Categories />
					</div>
					<div className="painting_techniques design">
						<p>Techniques</p>
						<Categories />
						<Categories />
					</div>
					<div className="painting_mediums design">
						<p>Mediums</p>
						<Categories />
						<Categories />
					</div>
					<div className="painting_sizes design">
						<p>Sizes</p>
						<Categories />
						<Categories />
					</div>
				</div>	
				<div className="products_listing">
					<div className="product_list">
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
					</div>
					<div className="horizontal_products">
						<div className="horizontal_product">
							<img src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/buddhaji-1-sanya-shankar.jpg" alt="" />
							<div className="horizontal_product_info same">
								<p> The Lean startup</p>
								<div className="horizontal_product_price same">
									<p>$</p>
									<p>20</p>
								</div>	
								<div className="info">
									<p>The sources which present a complete picture of the life of Siddhārtha Gautama are a variety of different, and sometimes conflicting,
									traditional biographies. These include the Buddhacarita, Lalitavistara Sūtra, Mahāvastu, and the Nidānakathā.
									</p>
								</div>	
								<div className="horizontal_icons">
									<div className="fav_icon">
										<p>Add to Favorites</p>
									</div>
									<div className="cart_icon">	
										<p>Add to Cart</p>
									</div>	
								</div>
							</div>	
						</div>		
						<Product />

					</div>	
					<div className="product_list">
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
					</div>
				</div>
			</div>	
		</div>
	)
}

export default ProductPage