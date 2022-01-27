import React,{useContext,useState} from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import TopHeader from '../components/TopHeader';
import BottomHeader from '../components/BottomHeader';
import Breadcrump from '../components/Breadcrumb';
import { ProductStyles, Buttons} from '../styles/Index'; 
import {Context}  from '../context/Store';
import { Colors } from '../styles/Colors';
import CollapseView from '../components/CollapseView';

const ProductScreen = () =>  {

    const [state, dispatch] = useContext(Context);
    const [rating, setRating] = useState(3);
    
    return (
    <ScrollView>
        <View style={{backgroundColor:Colors.WHITE}}>
            <TopHeader/>
            <BottomHeader/>
            <Breadcrump text="home / product"/>
            <View style={ProductStyles.productPageImageWrapper}>
                <Image style={ProductStyles.productPageImage} source={{uri: state.activeProduct?.thumbnail}} resizeMode='contain'/>
            </View>
            <View style={{paddingHorizontal:"3%"}}>
                <View style={{flexDirection:"row", marginTop:20}}>
                    <Text style={ProductStyles.partnerName}>{state.activeProduct?.partner_name}</Text>
                    <Image 
                        source={require("../../assets/badge.png")} 
                        style={{height:35, width:35, marginTop:-7}} 
                        resizeMode='contain'/>
                </View>
                <Text style={ProductStyles.productPageName}>{state.activeProduct?.title}</Text>
                <View style={{flexDirection:"row", paddingHorizontal:"3%"}}>
                    <Text style={ProductStyles.productPageOfferPrice}>{state.activeProduct?.stock_record_price_currency} {state.activeProduct?.stock_record_price_retail} /-</Text>
                    <Text style={[ProductStyles.productPagePrice,{marginLeft:20}]}>{state.activeProduct?.stock_record_price_currency} {state.activeProduct?.stock_record_price_retail}</Text>
                </View>

                <View style={Buttons.addToCartProductPage}>
                    <Text style={Buttons.btnProductTxt}>Add to Cart</Text>
                </View>

                <View style={ProductStyles.shippingDetailsWrapper}>
                    <Image 
                        source={require("../../assets/delivery.png")} 
                        style={{height:33, width:62}} 
                        resizeMode='contain'/>
                    <Text style={ProductStyles.shippingText}>Delivery within Nairobi CBD from as low as Ksh 100 <Text style={{color:Colors.GREEN}}>Calculate Shipping</Text></Text>
                </View>
            </View>
            <View style={ProductStyles.productDetailsWrapper}>
                <Image 
                    source={require("../../assets/light_green_bg.png")} 
                    style={{height:38, width:"100%"}} 
                    resizeMode='cover'/>
                <View style={ProductStyles.productDetailsCo}>
                    
                    <View>
                       <CollapseView heading="Description" content="Not available" active={true}/>
                       <CollapseView heading="Product Reviews" content="Not available" active={false}/>
                       <CollapseView heading="Shipping and returns" content="Not available" active={false}/>
                    </View>

                    <View style={ProductStyles.knowYourSellerWrapper}>
                        <Text style={ProductStyles.knowSellerHeader}>Know your seller</Text>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <View>
                                <Text style={[ProductStyles.sellerDetailsTxt,{textDecorationLine:"underline"}]}>{state.activeProduct?.partner_name}</Text>
                                <Text style={ProductStyles.sellerDetailsTxt}>On Sky.Garden since 2019</Text>
                                <Text style={ProductStyles.sellerDetailsTxt}>Nairobi, Kenya </Text>
                                <Text style={ProductStyles.sellerDetailsTxt}>Item Availability within 24hrs</Text>
                            </View>
                            <View style={ProductStyles.partnerLogo}>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"space-between", marginTop:25}}>
                            <Text style={ProductStyles.sellerDetailsTxt}><Text style={{fontWeight:"bold"}}>60</Text> Bought here</Text>
                            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <StarRating
                                    rating={rating}
                                    starSize={20}
                                    color="orange"
                                />
                                <Text><Text style={{fontWeight:"bold"}}>13</Text> Reviews</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    </ScrollView>
    )
}

export default ProductScreen;