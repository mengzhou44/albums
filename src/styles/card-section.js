import React from 'react';
import { View } from 'react-native';
import colors from './_colors';

const CardSection = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: colors.white,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: colors.gray,
        position: 'relative'
    }
};

export default CardSection; 