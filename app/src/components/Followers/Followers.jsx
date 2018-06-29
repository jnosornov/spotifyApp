import React, { Component } from 'react';
import Artist from '../Artist/Artist.jsx';
import Login from '../Login/Login.jsx';
import Header from '../Header/Header.jsx';

const getParams = require('../../functions/getAccessToken.js');
import axios from 'axios';

var artists = require('../../seed/seedArtistData.json');

class Followers extends Component {

    state = {
        artists
    }

    componentDidMount() {
        var params = getParams.getHashParams();
        var accessToken = params.access_token;

        const url = 'https://api.spotify.com/v1/me/following?type=artist';
        const requestOptions = {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        };

        axios.get (url, requestOptions).then((response) => {

            var artistData = response.data.artists.items.map((item, index) => ({
                name: item.name,
                genres: item.genres,
                followers: item.followers.total,
                images: item.images,
                id: index
            }));

            let itemsToBeRender = 4;
            if(artistData.length > itemsToBeRender) {
                artistData.splice(itemsToBeRender, artistData.length - itemsToBeRender);
            }

            this.setState({ artists : artistData });            
        }).catch((err) => {
            console.log(`Error message: ${err.message}`);
        });
    }

    render() {
        let artist = (
            <div>
                {this.state.artists.map((artist) => {
                    return <Artist
                        name={artist.name}
                        followers={artist.followers}
                        genres={artist.genres}
                        imageUrl={artist.images[0].url}
                        key={artist.id}
                    />
                })}
            </div>
        );

        return (
            <div className="app">
                <Header/>
                { artist }
            </div>
        );
    }
};

export default Followers;