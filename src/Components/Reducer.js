export const initialState={
	basket: [],
	fav: [],
	current: [],
	user: null,
	filter: [],
};

//selector
export const getBasketTotal=(basket)=>
	basket?.reduce((amount,item)=>item.price+amount,0);

export const getBaskettTotal=(basket)=>
	basket?.reduce((amount,item)=>item.price+amount,0);	

//action => add to the basket or remove from the basket
const reducer = (state,action) => {
	switch(action.type){
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket,action.item],
			};

		case 'EMPTY_BASKET':
			return{
				...state,
				basket: []
			}
		case 'REMOVE_FROM_BASKET':
			const index=state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);	
			let newBasket = [...state.basket];
			if (index >= 0){
				newBasket.splice(index,1)
			}else{
				console.warn(`Cant remove the painting (id: ${action.id} as it is not in the basket.`)
			}
			return{
				...state,
				basket: newBasket
			}
		case 'ADD_TO_CURRENT':
			return{
				...state,
				current: [action.item]
			}
		case 'ADD_TO_FAV':
			return {
				...state,
				fav: [...state.fav,action.item],
			};
		case 'REMOVE_FROM_FAV':
			const ind=state.fav.findIndex(
				(favItem) => favItem.id === action.id
			);	
			let newFav = [...state.fav];
			if (ind >= 0){
				newFav.splice(ind,1)
			}else{
				console.warn(`Cant remove the painting (id: ${action.id} as it is not in the favorites.`)
			}
			return{
				...state,
				fav: newFav
			}	
		case 'SET_USER':
			return{
				...state,
				user: action.user
			}		
		case 'ADD_TO_FILTER':
			return {
				...state,
				filter: [...state.filter,action.filter],
			};
		default:
			return state;	
	}
};

export default reducer;
