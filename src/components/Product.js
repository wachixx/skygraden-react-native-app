import React, {useContext} from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors } from '../styles/Colors';
import { ProductStyles, Buttons} from '../styles/Index'; 
import {useNavigation} from '@react-navigation/native';
import {Context}  from '../context/Store';
import {addToCart,calculatePrice} from '../utils/CartOperations';

const Product = (props) =>  {

    const navigation = useNavigation();
    const [state, dispatch] = useContext(Context);

    const showProductDetails = (product) =>{
        dispatch({type:"SET",key:"activeProduct", payload: product});
        navigation.navigate("ProductScreen");
    }

    const buyItem = (product)=>{
        let cart = addToCart(product, state.cartItems || []);
        dispatch({type:"SET",key:"cartItems", payload: cart});
    }

    return(
        <View style={ProductStyles.productWrapper}>
            <TouchableOpacity onPress={()=>showProductDetails(props.details)}>
                <View>
                    <View style={ProductStyles.productImageWrapper}>
                        <Image style={ProductStyles.productImage} source={{uri: props.details.thumbnail}} resizeMode='contain'/>
                    </View>
                    <Text style={ProductStyles.productName} numberOfLines={2}>{props.details.title}</Text>
                    <Text style={ProductStyles.productOfferPrice} numberOfLines={1}>{props.details.stock_record_price_currency} {calculatePrice(props.details)}</Text>
                    <Text style={ProductStyles.productPrice} numberOfLines={1}>{props.details.stock_record_price_currency} {props.details.stock_record_price_retail}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>buyItem(props.details)}>
                <View style={Buttons.addToCart}>
                    <Text style={Buttons.btnTxt}>Add to Cart</Text>
                    <View style={ProductStyles.separator}></View>
                    <Icon name='shoppingcart' size={20} color={Colors.WHITE}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Product;