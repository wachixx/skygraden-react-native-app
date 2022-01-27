import React, { useState,useContext } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; 
import {Header,CartStyles} from '../styles/Index'; 
import {Context}  from '../context/Store';
import { Colors } from '../styles/Colors';

const CartItem = (props) =>  {

    const [state, dispatch] = useContext(Context);
    const [itemCount, setItemCount] = useState(1);
    const [cost, setCost] = useState(props.cartItem.cost);

    const removeProduct= (id) => {
        let newCartItems  = state.cartItems.filter((item) => item.id !== id);
        dispatch({type:"SET",key:"cartItems", payload: newCartItems});
    }

    const increaseCount = () =>{
        let count = itemCount + 1;
        setItemCount(count);
        setCost(count*parseFloat(props.cartItem.cost).toFixed(2));
    }

    const decreaseCount = () =>{
        let count = 1;
        if(itemCount > 1){
           count = itemCount - 1;
           setItemCount(count);
           setCost(count*parseFloat(props.cartItem.cost).toFixed(2));
        }
    }

    return(
        <View elevation={2} style={CartStyles.wrappper}>
            <Image style={CartStyles.cartImage} source={{uri: props.cartItem?.product?.thumbnail}} resizeMode='contain'/>
            <View style={{flex:1, paddingVertical:5, marginLeft:15}}>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={CartStyles.productName}>{props.cartItem?.product?.title}</Text>
                    <TouchableOpacity onPress={()=>removeProduct(props.cartItem?.id)}>
                        <Text style={CartStyles.remove}>Remove</Text>
                    </TouchableOpacity>
               </View>
               <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:15}}>
                    <View style={{flexDirection:"row", justifyContent:"space-between", width:80}}>
                        <Icon
                        name="minuscircleo"
                        size={22}
                        onPress={()=>decreaseCount()}/>
                        <Text>{itemCount}</Text>
                        <Icon
                        name="pluscircleo"
                        size={22}
                        color={Colors.GREEN}
                        onPress={()=>increaseCount()}/>
                    </View>
                    <Text style={{fontWeight:"bold", fontSize:18, color:Colors.TEXT_COLOR}}>{props.cartItem?.product.stock_record_price_currency} {cost}</Text>
               </View>
            </View>
        </View>
    )
}

export default CartItem;