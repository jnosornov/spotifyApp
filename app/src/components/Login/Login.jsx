import React from 'react';
import { Button } from 'antd';
import axios from 'axios';

import Header from '../Header/Header.jsx';

const Login = () => {

    function loginSpotifyClickHandler() {
        // > localStorage.setItem('state', true);
        // > var state = localStorage.getItem('state');

        var client_id = '4ebf54a90c4645958bb33f2737e82775';
        var response_type = 'token';
        var redirect_uri = 'http://localhost:3000/followers';
        var scope = 'user-follow-read';

        var url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

        window.location = url;
    }

    return(
        <div>
            <Header />
            <Button 
                className='loginButton' 
                onClick={() => loginSpotifyClickHandler()}>
            Login to Spotify
            </Button>
        </div>
    );
};

export default Login;