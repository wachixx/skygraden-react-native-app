import React, {useState, useContext, useEffect} from 'react';
import { View, Text, ScrollView} from 'react-native';
import TopHeader from '../components/TopHeader';
import BottomHeader from '../components/BottomHeader';
import Breadcrump from '../components/Breadcrumb';
import CartItem from '../components/CartItem';
import {Buttons} from '../styles/Index'; 

import {Context}  from '../context/Store';
import { Colors } from '../styles/Colors';

const ProductScreen = () =>  {

    const [state, dispatch] = useContext(Context);
    const [totalCost, setTotalCost] = useState()

    const calculateTotal = () =>{
        var total = state.cartItems.map(item => item.cost).reduce((acc, item) => item + acc);
        return total;
    }

    useEffect(()=>{
        let totalCost = calculateTotal();
        setTotalCost(totalCost);
    },[])

    return (
    <ScrollView>
        <View>
            <TopHeader/>
            <BottomHeader/>
            <Breadcrump text="Home / cart"/>
            <View style={{padding:"3%"}}>
                 <Text style={{fontSize:20,marginTop:10, marginBottom:5, color:Colors.TEXT_COLOR}}>My Cart</Text>
                {state.cartItems?.length > 0?
                <View>
                    <View>
                        {state.cartItems?.map((item, i)=>{
                            return (
                                <CartItem key={i} cartItem={item}/>
                            )
                        })}
                    </View>
                    <View style={{flexDirection:"row", marginTop:20, justifyContent:"space-between"}}>
                        <Text style={{fontWeight:"bold", fontSize:20, color: Colors.TEXT_COLOR}}>Total</Text>
                        <Text style={{fontWeight:"bold", fontSize:20,  color: Colors.TEXT_COLOR}}>Ksh {totalCost}</Text>
                    </View>
                    <View style={Buttons.addToCartProductPage}>
                        <Text style={Buttons.btnProductTxt}>Proceed to Checkout</Text>
                    </View>
                </View>
                :
                <Text>No items in your cart</Text>
                }
            </View>
        </View>
    </ScrollView>
    )
}

export default ProductScreen;