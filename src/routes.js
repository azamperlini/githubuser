import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home/index';
import Repositores from './pages/Repositores/index';


export default function Routes(){
   
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/repositories' component={Repositores}></Route>
            </Switch>
        </BrowserRouter>
    )
}