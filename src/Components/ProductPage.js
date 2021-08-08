import React,{useState,useEffect} from 'react'
import './ProductPage.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Product from './Product'
import FilterListIcon from '@material-ui/icons/FilterList';
import Categories from './Categories'
import ProductData from "./Products.json"
import {filteredProducts} from "./Header.js"
import Header from "./Header"
import Checkbox from '@material-ui/core/Checkbox';
import {db} from "./Firebase/Firebase"
import ProductDetail from "./ProductDetail"

function ProductPage({}) {

	const [dropdown, setDropdown] = useState("default")
	const [dropHtoL, setDropHtoL] = useState([])
	const [dropLtoH, setDropLtoH] = useState([])
	const [productData, setProductData] = useState([])
	const [filteredList, setfilteredList] = useState("")
	const [filteredValues, setfilteredValues] = useState([])

	const [checked, setChecked] = useState(false)
	
	// useEffect(() => {
	// 	db
	// 		.collection('products')
	// 		.onSnapshot(snapshot => (
	// 			setProductData(snapshot.docs.map(doc => ({
	// 				data: doc.data()
	// 			}))),
	// 			setfilteredValues(snapshot.docs.map(doc => ({
	// 				data: doc.data()
	// 			})))
	// 		))	
	// }, [])

	useEffect(() => {
		setfilteredValues(
			ProductData.filter((product)=>
				product.categories.toLowerCase().includes(filteredList.toLowerCase())
			)
		);
	},[checked]);

	const dropChange=() => {
		if (dropdown == "HtoL"){
			setDropHtoL(
				filteredValues.sort((a,b)=>
					(a.price > b.price) ? -1:1
				)
			);
		}else if(dropdown == "LtoH"){
			setDropLtoH(
				filteredValues.sort((a,b)=>
					(a.price > b.price) ? 1:-1
				)
			);
		}
	}

	const addToFilter=(e)=>{
		if (!checked){
			setfilteredList(e.target.value)
			setfilteredValues(productData)
		}
		else{
			setDropHtoL(filteredValues)
			setfilteredList("")

		}
	}

	return (
		<>
			<Header />
			<div className="product_page">
				<div className="products_list_top">
					<div class="filter dropdown">
		    			<p>Filter By</p>
						<FilterListIcon className="filter_icon" />
		    			<div class="dropdown-content">
		     	 			<div className="painting_categories design">
								<p>Categories</p>
								<div className="h">
									<Checkbox value="abstraction" onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="1"className="label">Abstraction</label>
								</div>	
								<div className="h">
									<Checkbox value="animals"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="2"className="label">Animals</label>
								</div>	
								<div className="h">
									<Checkbox value="conceptual"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="3"className="label">Conceptual</label>
								</div>
								<div className="h">
									<Checkbox value="landscape"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="4"className="label">Landscape</label>
								</div>
								<div className="h">
									<Checkbox value="nature"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="5"className="label">Nature</label>
								</div>
								<div className="h">
									<Checkbox value="nude"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="6"className="label">Nude</label>
								</div>
								<div className="h">
									<Checkbox value="potrait"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="7"className="label">Potrait</label>
								</div>	
							</div>
							<div className="painting_styles design">
								<p>Styles</p>
								<div className="h">
									<Checkbox value="fine art"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="8"className="label">Fine Art</label>
								</div>
								<div className="h">
									<Checkbox value="pop art"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="9"className="label">Pop Art</label>
								</div>
								<div className="h">
									<Checkbox value="realism"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="10"className="label">Realism</label>
								</div>
								<div className="h">
									<Checkbox value="semi abstract"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="11"className="label">Semi Abstract</label>
								</div>
								<div className="h">
									<Checkbox value="symbolic"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="12"className="label">Symbolic</label>
								</div>
								<div className="h">
									<Checkbox value="sketch"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="13"className="label">Sketch</label>
								</div>
							</div>
							<div className="painting_techniques design">
								<p>Techniques</p>
								<div className="h">
									<Checkbox value="oil color"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="14"className="label">Oil Color</label>
								</div>
								<div className="h">
									<Checkbox value="acrylic color"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="15"className="label">Acrylic Color</label>
								</div>
								<div className="h">
									<Checkbox value="pencil color"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="16"className="label">Pencil Color</label>
								</div>
								<div className="h">
									<Checkbox value="pencil sketch"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="17"className="label">Pencil Sketch</label>
								</div>

							</div>
							<div className="painting_mediums design">
								<p>Mediums</p>
								<div className="h">
									<Checkbox value="canvas"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="18"className="label">Canvas</label>
								</div>
								<div className="h">
									<Checkbox value="paper"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="19"className="label">Paper</label>
								</div>
								<div className="h">
									<Checkbox value="digital"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="20"className="label">Digital</label>
								</div>
								<div className="h">
									<Checkbox value="print"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
									<label for="21"className="label">Print</label>
								</div>
							</div>		    			
						</div>
  				</div> 
					<div className="products_list">
						<div className="sort">
							<p>Sort By</p>
							<div className="dropdown">
								<select value={dropdown} onChange={(e)=>{setDropdown(e.target.value)}} onClick={dropChange}>
									<option value="default">Default</option>
									<option value="LtoH">Price(low to high)</option>
									<option value="HtoL">Price(high to low)</option>
								</select>	
							</div>
						</div>
					</div>
				</div>		
				<div className="products_list_bottom">
					<div className="filter_lists">
						<div className="painting_categories design">
							<p>Categories</p>
							<div className="h">
								<Checkbox value="abstraction" onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="1"className="label">Abstraction</label>
							</div>	
							<div className="h">
								<Checkbox value="animals"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="2"className="label">Animals</label>
							</div>	
							<div className="h">
								<Checkbox value="conceptual"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="3"className="label">Conceptual</label>
							</div>
							<div className="h">
								<Checkbox value="landscape"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="4"className="label">Landscape</label>
							</div>
							<div className="h">
								<Checkbox value="nature"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="5"className="label">Nature</label>
							</div>
							<div className="h">
								<Checkbox value="nude"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="6"className="label">Nude</label>
							</div>
							<div className="h">
								<Checkbox value="potrait"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="7"className="label">Potrait</label>
							</div>	
						</div>
						<div className="painting_styles design">
							<p>Styles</p>
							<div className="h">
								<Checkbox value="fine art"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="8"className="label">Fine Art</label>
							</div>
							<div className="h">
								<Checkbox value="pop art"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="9"className="label">Pop Art</label>
							</div>
							<div className="h">
								<Checkbox value="realism"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="10"className="label">Realism</label>
							</div>
							<div className="h">
								<Checkbox value="semi abstract"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="11"className="label">Semi Abstract</label>
							</div>
							<div className="h">
								<Checkbox value="symbolic"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="12"className="label">Symbolic</label>
							</div>
							<div className="h">
								<Checkbox value="sketch"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="13"className="label">Sketch</label>
							</div>
						</div>
						<div className="painting_techniques design">
							<p>Techniques</p>
							<div className="h">
								<Checkbox value="oil color"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="14"className="label">Oil Color</label>
							</div>
							<div className="h">
								<Checkbox value="acrylic color"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="15"className="label">Acrylic Color</label>
							</div>
							<div className="h">
								<Checkbox value="pencil color"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="16"className="label">Pencil Color</label>
							</div>
							<div className="h">
								<Checkbox value="pencil sketch"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="17"className="label">Pencil Sketch</label>
							</div>

						</div>
						<div className="painting_mediums design">
							<p>Mediums</p>
							<div className="h">
								<Checkbox value="canvas"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="18"className="label">Canvas</label>
							</div>
							<div className="h">
								<Checkbox value="paper"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="19"className="label">Paper</label>
							</div>
							<div className="h">
								<Checkbox value="digital"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="20"className="label">Digital</label>
							</div>
							<div className="h">
								<Checkbox value="print"  onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
								<label for="21"className="label">Print</label>
							</div>
						</div>
					</div>	
					<div className="products_listing">
						<div className="product_list">
							{dropdown.includes("HtoL") || checked ? 
								dropHtoL.map((product) => (
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
					        	)) : (
					        	dropdown.includes("LtoH") || checked ? 
					        		dropLtoH.map((product) => (
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
						        	)) : (
						        		ProductData.map((product) => (
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
							        	))
						        	) 
					        	)
					     	}
						</div>	
					</div>
				</div>	
			</div>
		</>	
	)
}


export default ProductPage