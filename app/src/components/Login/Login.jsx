import React from 'react';
import { Button } from 'antd';
import axios from 'axios';

import Header from '../Header/Header.jsx';

const Login = () => {

// > https://accounts.spotify.com/authorize?client_id=4ebf54a90c4645958bb33f2737e82775&redirect_uri=http://localhost:3000/followers&response_type=token

    function onClickButton() {
        
        var client_id = '4ebf54a90c4645958bb33f2737e82775';
        var response_type = 'token';
        var redirect_uri = 'http://localhost:3000/followers';
        var scope = 'user-follow-read'

        localStorage.setItem('state', true);
        var state = localStorage.getItem('state');

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
            <Button className='loginButton' onClick={() => onClickButton()}>Login to Spotify</Button>
        </div>
    );
};

export default Login;