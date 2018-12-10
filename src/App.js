import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './containers/Main/Main'
import InputText from './containers/InputText/InputText'

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter > 
                <Switch>
                    <Route exact path={ "/" } component={ Main }  />
                    <Route path={ "/input" } component={ InputText } />             
                </Switch>            
            </BrowserRouter>
    );
  }
} 

export default App;
