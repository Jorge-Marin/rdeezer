import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DeezerHome from '../pages/DeezerHome';
import Download from '../pages/Download';
import LogIn from '../pages/LogIn';
import Plans from '../pages/Plans';
import SignUp from '../pages/SignUp';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={DeezerHome}></Route>
            <Route exact path="/Download" component={Download}></Route>
            <Route exact path="/Plans" component={Plans}></Route>
            <Route exact path="/LogIn" component={LogIn}></Route>
            <Route exact path="/SignUp" component={SignUp}></Route>
        </Switch>
    </BrowserRouter>

);

export default App;