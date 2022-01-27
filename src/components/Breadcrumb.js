import React from 'react';
import { View, Text} from 'react-native';
import { Header} from '../styles/Index'; 

const Breadcrump = (props) =>  {
    return(
        <View style={Header.breadcrumbsWrapper}>
            <Text>{props.text}</Text>
        </View>
    )
}

export default Breadcrump;