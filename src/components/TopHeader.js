import React from 'react';
import { View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Colors } from '../styles/Colors';
import { Header} from '../styles/Index'; 

const TopHeader = () =>  {
    return(
        <View style={Header.topHeaderWrapper}>
            <Text style={Header.topHeaderTxt}>Customer Care <Icon name="angle-down" style={{marginTop:5}} size={20} color={Colors.WHITE}/></Text>
            <View  style={Header.topLeftWraper}>
                <Text style={Header.topHeaderTxt}>Sell</Text>
                <Text style={Header.topHeaderTxt}>Help and Contact</Text>
            </View>
        </View>
    )
}

export default TopHeader;