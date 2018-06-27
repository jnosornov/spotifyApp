import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Followers from './components/Followers/Followers.jsx';

const App = () => {
    return(
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/followers' component={Followers}/>
        </Switch>
    );
};

export default App;