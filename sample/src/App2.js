import React, { Component } from 'react';

import Products from './Products';
import Rating from './Rating';
import {Button} from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

class App extends Component {

    formatName(user){
        return user.firstName + ' ' + user.lastName;
    }

    render() {

        const user = {
            firstName:'Greg',
            lastName:'Lim'
        };

        const isValid = true;

        return (
            <div className="App">
                <h1>Hello, {this.formatName(user)}</h1>
                <Products />
                <Rating rating="1"></Rating>
                <Rating rating="2"></Rating>
                <Rating rating="3"></Rating>
                <Rating rating="4"></Rating>
                <Rating rating="5"></Rating>
                
                <Button bsStyle="primary" disabled="{!isValid}">Default</Button>
                
                
                    
            </div>
        );
    }
}

export default App;
