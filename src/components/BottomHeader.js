import React,{useContext} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import {useNavigation} from '@react-navigation/native';
import { Header} from '../styles/Index'; 
import {Context}  from '../context/Store';

const BottomHeader = () =>  {
    const navigation = useNavigation();
    const [state, dispatch] = useContext(Context);
    return(
        <View style={Header.bottomHeaderWrapper}>
            <View style={Header.IconsContainer}>
                <View style={Header.logoWrapper}>
                    <Image style={Header.headerIcon} source={require("../../assets/bar.png")}/>
                    <Image style={Header.logo} resizeMode='cover' source={require("../../assets/skylogo_white.png")}/>
                </View>
                <View style={Header.IconsWrapper}>
                    <Image style={Header.headerIcon} source={require("../../assets/user.png")}/>
                    <TouchableOpacity onPress={()=>navigation.navigate("CartScreen")}>
                        <View style={{position:"relative", marginLeft:5}}>
                            <Image style={Header.headerIcon} source={require("../../assets/cart.png")}/>
                            {state.cartItems?.length > 0?
                            <Text style={Header.cartNumber}>
                                {state.cartItems?.length}
                            </Text>
                            :null
                            }
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Header.searchFieldWrapper}>
                <TextInput
                    style = {Header.input}
                    placeholder = "Search for anything"
                />
                <Icon style={Header.searchIcon}
                    name="search"
                    size={22}/>
            </View>
        </View>
    )
}

export default BottomHeader;