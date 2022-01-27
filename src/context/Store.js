import React, {createContext, useEffect, useReducer} from "react";   
import AsyncStorage from '@react-native-async-storage/async-storage';   
import Reducer from './Reducer';
                                                                                                                                                                       
const initialState = {}       
                                                                                                                             
export const Context = createContext(initialState);                                                                      
                                                                                
const Store = ({children}) => {    

    const [state, dispatch] = useReducer(Reducer, initialState); 

    useEffect(async() => {                 
        let local_state = await AsyncStorage.getItem('state');      
        local_state = JSON.parse(local_state);  
        if (local_state) {                                                      
            dispatch({type: 'SET', key:'cartItems', payload: local_state.cartItems}); 
            dispatch({type: 'SET', key:'activeProduct', payload: local_state.activeProduct}); 
        }                                                                       
    }, [])                                                                      
                                                                                
    useEffect(() => {           
        AsyncStorage.setItem('state', JSON.stringify(state))                    
    }, [state])  
    
    return (                                                                    
        <Context.Provider value={[state, dispatch]}>                            
            {children}                                                          
        </Context.Provider>                                                     
    )                                                                           
};  

export default Store;