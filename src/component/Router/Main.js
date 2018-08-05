import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import {Home} from '../Home/Home';
import {User} from '../User/User';
import Login from '../Login/Login';

const Main = () => (
    <main>
        <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path='/home' render={props => <Home {...props}/>} />
            <Route path='/user' render={props => <User {...props}/>}/>
            <Route path='/login' render={props => <Login {...props}/>}/>
        </Switch>
    </main>
)

export default Main;