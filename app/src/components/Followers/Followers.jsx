import React, { Component } from 'react';
import Artist from '../Artist/Artist.jsx';
import Login from '../Login/Login.jsx';
import Header from '../Header/Header.jsx';

var artists = require('../../data/artist.json');

class Followers extends Component {

    state = {
        artists
    }

    render() {
        let artists = (
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
                { artists }
            </div>
        );
    }
};

export default Followers;