import React,{useState} from 'react'
import './Categories.css'
import {useStateValue} from "./StateProvider"
import Checkbox from '@material-ui/core/Checkbox';

function Categories({category, category_id}) {

	const [{filter}, dispatch] = useStateValue();
	const [checked, setChecked] = useState(false)
	const [filteredList, setfilteredList] = useState([])

	const addToFilter=(e)=>{
		if (!checked){
			let data = filteredList
			data.push(e.target.value)
			dispatch({
				type: 'ADD_TO_FILTER',
				filter: data
			}) 
			setfilteredList(data)
			console.log(filteredList)
			console.log("filter",filter)
		}
	}
	
	return (
		<>
			<Checkbox value={category} onClick={()=>setChecked(!checked)} onChange={(e)=>addToFilter(e)}/>
			<label for={category_id} className="label">{category}</label>
		</>	
		
	)
}

export default Categories