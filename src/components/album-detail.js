import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from '../styles/card';
import CardSection from '../styles/card-section';
import Button from '../styles/button';
import fonts from '../styles/_fonts';

const AlbumDetail = (props) => {
    const { headerStyle,
        thumbnailContainerStyle,
        thumbnailStyle,
        headerContentStyle,
        bodyStyle,
        imageStyle
        } = styles;
    const { thumbnail_image, image, title, artist, url } = props.album;
    return (
        <Card>
            <CardSection style={headerStyle}>
                <View style={thumbnailContainerStyle} >
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={fonts.size18} > {title} </Text>
                    <Text> {artist}</Text>
                </View>
            </CardSection>
            <CardSection style={bodyStyle}>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
};

const styles = {
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'flext-start'
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    thumbnailStyle: {
        height: 50,
        width: 50
    },

    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    bodyStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail