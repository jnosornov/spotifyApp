import React from 'react';
import { Button } from 'antd';

import Header from '../Header/Header.jsx';

const Login = () => {
    return(
        <div>
            <Header />
            <Button className='loginButton'>Login to Spotify</Button>
        </div>
    );
};

export default Login;