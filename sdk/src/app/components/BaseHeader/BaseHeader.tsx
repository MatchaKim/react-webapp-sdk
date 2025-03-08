import { View, TouchableOpacity, Text } from 'react-native';
import { BaseHeaderProps } from './BaseHeader.props';
import React from 'react';
const BaseHeader : React.FC<BaseHeaderProps> = ({ headerBackgroundColor, navigation }) => {
    return (
        <View style={{width:'100%',backgroundColor: headerBackgroundColor ? headerBackgroundColor : 'white',paddingHorizontal:12,paddingTop:16,paddingBottom:12}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{width:16,height:16}}>
                <Text>{"<"}</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default BaseHeader;