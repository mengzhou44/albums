import React from 'react';
import { View, Text } from 'react-native';
import colors from '../styles/_colors';
import fonts from '../styles/_fonts';

const Header = (props) => {
    const { containerStyle } = styles;
    return (<View style={containerStyle}>
        <Text style={fonts.size20}> {props.headerText} </Text>
    </View>
    );
};

const styles = {
    containerStyle: {
        height: 60,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightGray,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    }
};

export default Header;

