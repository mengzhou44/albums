import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import _ from 'lodash';
import AlbumDetail from './album-detail';


class AlbumList extends Component {

    state = { albums: [] };

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((res) => {
            this.setState({
                albums: res.data
            })
        });
    }

    renderAlbum(album) {
        console.log('album', album.title);
        return (
            <AlbumDetail key={album.url} album={album} />
        )
    }

    render() {
        return (
            <ScrollView>
                {_.map(this.state.albums, this.renderAlbum)}
            </ScrollView>
        );
    }
}


export default AlbumList;
