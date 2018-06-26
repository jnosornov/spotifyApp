import React, { Component } from 'react';
import Artist from './components/Artist/Artist.jsx';

var artists = require('./data/artist.json');

class App extends Component {

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
                <h1>Hello Spotify!</h1>
                { artists }
            </div>
        )
    }
};

export default App;