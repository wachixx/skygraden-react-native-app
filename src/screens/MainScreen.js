import React, {useState, useEffect, useContext} from 'react';
import {Image, Text, View, FlatList, ActivityIndicator} from 'react-native';
import Config from "react-native-config"
import { otherStyles} from '../styles/Index'; 
import TopHeader from '../components/TopHeader';
import BottomHeader from '../components/BottomHeader';
import Breadcrump from '../components/Breadcrumb';
import Product from '../components/Product';
import {Context}  from '../context/Store';


const MainScreen = () =>  {

    const [loading, setLoading] = useState(false);
    const [refreshed, setRefreshed] = useState(true);
    const [state, dispatch] = useContext(Context);

    const onRefresh = () => {
        setRefreshed(true);
    }

    useEffect(() =>{
        const fetchProducts = () => {
            setLoading(true);
            fetch(Config.API_URL + "/indexes/dev-productsv3/docs/search?api-version=2017-11-11", {
                method: "POST",
                mode: 'cors', 
                headers: {
                    'api-key': Config.API_KEY,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'search': "offer_benefit_type eq 'Absolute' and category_slug eq 'smartphones' ",
                    'select': "title, partner_name, thumbnail, stock_record_price_currency, stock_record_price_retail, offer_benefit_type, offer_benefit_value, category_name, category_slug"
                })
            })
            .then(response => response.json())
            .then(data => {
                dispatch({type:"SET",key:"products", payload: data});
                setLoading (false);
            }).
            catch(err => {
                setLoading(false);
            });
        }
        fetchProducts();
    },[refreshed])

    const flatlistHeader = () => {
        return <Text style={{fontSize:25,marginVertical:20}}>Smartphones</Text>;
    };

    return (
        <View>
            <Image 
            source={require("../../assets/background.png")} 
            style={{top:-200,position:"absolute",width:"100%"}} 
            resizeMode='contain'>
            </Image>
                <TopHeader/>
                <BottomHeader/>
                <Breadcrump  text="Home / search results"/>
                {
                loading?
                <View style={otherStyles.loading}>
                    <ActivityIndicator style={otherStyles.loadingTxt} size="large" color="#00ff00" />
                </View>
                :
                <View style={{paddingHorizontal:"3%", marginBottom:100}}>
                    <FlatList
                        data={state.products?.value}
                        renderItem={({item}) => 
                            <Product details={item}/>
                        }
                        numColumns={2}
                        keyExtractor={item => item.title}
                        ListHeaderComponent={flatlistHeader}
                        onRefresh={() => onRefresh()}
                        refreshing={loading}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                }
        </View>
    )
}

export default MainScreen;