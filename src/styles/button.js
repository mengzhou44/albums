import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import colors from './_colors';


const Button = (props) => {
    const { buttonStyle, textStyle } = styles;
    return < TouchableOpacity style={buttonStyle}
        onPress={() => props.onPress()}
    >
        <Text style={textStyle} >
            {props.children}
        </Text>
    </ TouchableOpacity>
}


const styles = {
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: colors.blue,
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: colors.white,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.blue,
        marginLeft: 5,
        marginRight: 5
    }
}

export default Button;