import React, {useState} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Colors } from '../styles/Colors';
import { CollapseViewStyle} from '../styles/Index'; 

const CollapseView = (props) =>  {
    const [active, setActive] = useState(props.active)
    return(
        <View>
            <TouchableOpacity onPress={() => setActive(!active)}>
                <View style={CollapseViewStyle.wrapper}>
                    <Text style={CollapseViewStyle.heading}>{props.heading}</Text>
                    <Icon name="angle-down" style={{marginTop:25}} size={30} color={Colors.TEXT_COLOR}/>
                </View>
            </TouchableOpacity>
            {active?
            <View style={CollapseViewStyle.content}>
                 <Text>{props.content}</Text>
            </View>
            :null
            }
        </View>
    )
}

export default CollapseView;