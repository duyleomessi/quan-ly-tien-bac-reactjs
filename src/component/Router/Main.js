import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import {Home} from '../Home/Home';
import {User} from '../User/User';

const Main = () => (
    <main>
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path='/home' render={props => <Home {...props}/>} />
            <Route path='/user' render={props => <User {...props}/>}/>
        </Switch>
    </main>
)

export default Main;