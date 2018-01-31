import React from 'react';
import { View } from 'react-native';
import colors from './_colors';

const Card = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: colors.gray,
        borderBottomWidth: 1,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5
    }
};

export default Card; 