import React, { Component } from 'react';
import Artist from '../Artist/Artist.jsx';
import Login from '../Login/Login.jsx';
import Header from '../Header/Header.jsx';

import axios from 'axios';

var artists = require('../../data/artist.json');

class Followers extends Component {

    state = {
        artists
    }

    render() {
        var state = localStorage.getItem('state');
        console.log('This is the state inside followers:', state);

        function getHashParams() {
            var hashParams = {};
            var e, r = /([^&;=]+)=?([^&;]*)/g,
                q = window.location.hash.substring(1);
            while ( e = r.exec(q)) {
               hashParams[e[1]] = decodeURIComponent(e[2]);
            }
            return hashParams;
        }

        var params = getHashParams();
        console.log('URL parameters: ', params);

        var accessToken = params.access_token;
        console.log('Access token: ', accessToken);

        var token_type = params.token_type;
        console.log('Token type: ', token_type);

        var expires_in = params.expires_in;
        console.log('Token expires in: ' + expires_in + ' seconds');

        var url = 'https://api.spotify.com/v1/me/following?type=artist';
        var requestOptions = {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        };

        axios.get (url, requestOptions).then((response) => {

            var artistData = response.data.artists.items.map((item) => ({
                name: item.name,
                genres: item.genres,
                followers: item.followers.total,
                images: item.images
            }));

            console.log(artistData);

        }).catch((err) => {
            console.log(`Error message: ${err.message}`);
        });

        let artist = (
            <div>
                {this.state.artists.map((artist) => {
                    return <Artist
                        name={artist.name}
                        followers={artist.followers}
                        genres={artist.genres}
                        imageUrl={artist.imageUrl}
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