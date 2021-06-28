//setup data layer
//we need this to track the basket
/* its like creating a global variable around in react app instead
of passing props from grandparent to parent to child and so on(prop drilling)*/

import React, {createContext, useContext, useReducer} from 'react';

export const StateContext= createContext(); //creating data layer

//wraps our app and provide the data layer
export const StateProvider=({reducer, initialState,children})=>( 
   <StateContext.Provider value={useReducer(reducer,initialState)}>
     {children} {/*children is refering to app*/}
   </StateContext.Provider> 
);

//this is how we use it inside of a component(pull information fromm the data layer)
export const useStateValue=()=>useContext(StateContext);