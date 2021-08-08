import React,{useState,useEffect} from 'react'
import Product from './Product'
import Banner from './Banner'
import Header from './Header'
import './Home.css'
import ProductPage from "./ProductPage"
import {Link} from 'react-router-dom';
import {useStateValue} from "./StateProvider"
import {db} from "./Firebase/Firebase"
import ProductData from "./Products.json"

function Home({id,title,image,price,info}) {

	const [{user}, dispatch] = useStateValue();
	const [productsData,setProductsData] = useState([]);
	const [featured, setFeatured] = useState([])
	const [featuredSlide, setFeaturedSlide] = useState([])

	useEffect(() => {
		// db
		// 	.collection('products')
		// 	.onSnapshot(snapshot => (
		// 		setProductsData(snapshot.docs.map(doc => ({
		// 			data: doc.data()
		// 		})))
		// 	))	
		// setFeatured(
		// 	productsData.splice(0,6)
		// )	
		setFeatured(ProductData.splice(0,6))
		setFeaturedSlide(ProductData.splice(1,13))
	}, [ProductData])

	return (
		<div className="home">
			<Header />
			<div className="banner">
				<Banner />
			</div>
			<div className="products">
				{featured.map((product)=>(
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
			<Link to="/products" className="line">
				<p>View All Products</p>
				<img src="https://www.transparentpng.com/thumb/paint-brush/vL1cQT-paint-brush-transparent-image.png" alt="" />
			</Link>	
			<div className="add">
				<div className="typing_txt">
					Are you an Art Lover?<br/>
					<p>Buy Paintings With Us!</p>
					<Link to="/products">
						<div className="buy_button">
							<button>Buy Now</button>
						</div>
					</Link>			
				</div>
				<div className="add_img">
					<img src="https://media.apnarm.net.au/local_classifieds/2020/10/16/elements-of-art-6-q8kfjmdn93800i527v2.jpg" alt="" />
				</div>
			</div>
			<div className="bg">

			</div>
			<div className="text">
				<p>Featured Products:</p>
			</div>
			<div className="sliderr">
				<div className="slide_track">
						{featuredSlide.map((imag)=>(
							<div className="slid">
								<img src={imag.image} />
							</div>
						))
						}
					
				</div>
			</div>	 
		</div>
	)
}

export default Home