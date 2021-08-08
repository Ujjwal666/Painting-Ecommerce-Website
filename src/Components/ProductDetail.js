import React,{useState,useEffect} from 'react'
import './ProductDetail.css'
import Product from './Product'
import {useStateValue} from "./StateProvider"
import Header from "./Header"
import ReactImageZoom from 'react-image-zoom';
import ProductData from "./Products.json"
import {db} from "./Firebase/Firebase"

function ProductDetail({id,title,image,price,info,categories,size}) {

	const [{basket,current,fav}, dispatch] = useStateValue();
	const [related, setRelated] = useState([]);
	const [productsData,setProductsData] = useState([]);

	useEffect(() => {
		// db
		// 	.collection('products')
		// 	.onSnapshot(snapshot => (
		// 		setProductsData(snapshot.docs.map(doc => ({
		// 			data: doc.data()
		// 		})))
		// 	))
		setProductsData(ProductData)	
	}, [])

	useEffect(() => {
		setRelated(
			productsData.filter((product)=>
				product.categories.toLowerCase().includes(current[0]?.categories?.toLowerCase())
			)
		);
	},[productsData]);

	const addToBasket=()=>{
		{current.map(item=>(
		//dispatch some action todata layer
			dispatch({
				type: 'ADD_TO_BASKET',
				item:{
					id: item.id,
					title: item.title,
					image: item.image,
					price: item.price,
					info: item.info,
					size: item.size,
				}
			})
		))}
	}

	const addToFav=()=>{
		//dispatch some action todata layer
		{current.map(item=>(
			dispatch({
				type: 'ADD_TO_FAV',
				item:{
					id: item.id,
					title: item.title,
					image: item.image,
					price: item.price,
					info: item.info,
				}
			})
		))}
	}

	return (
		<>
			<Header />
			<div className="product_detail_page">
				{current.map(item=>(
					<div className="product_detail">
						<div className="product_image">
							<div className="main_image">
								<ReactImageZoom 
									img={item.image}
									scale=".9"
									zoomPosition="right"
									zoomWidth="500"
									height= "300"
								/>
							</div>
							<div className="support_image">

							</div>
						</div>
						<div className="product_info product_detail_info">
							<p>{item.title}</p>
							<div className="horizontal_product_price same">
								<p>$</p>
								<p>{item.price}</p>
							</div>	
							<div className="info">
								<p>{item.info}</p>
								<p>Size: {item.size}</p>
							</div>	
							<div className="horizontal_icons detail_horizontal_icons">
								<div className="fav_icon" onClick={addToFav}>
									<p>Add to Favorites</p>
								</div>
								<div className="cart_icon" onClick={addToBasket}>	
									<p>Add to Cart</p>
								</div>	
							</div>
						</div>
					</div>
				))}	
				<div className="related_products">
					<p>Other Related Artworks</p> 
					<div className="related_product">
						{related.map((product)=>(
							<Product
			        			id={product.id}
			        			title={product.title}
			        			image={product.image}
			        			price={product.price}  
			        			info={product.info}
			        			categories={product.categories}
			        			sale={product?.sale}
			        			size={product?.size}
			        		/>
						))}
					</div>
				</div>
			</div>
		</>	
	)
}

export default ProductDetail