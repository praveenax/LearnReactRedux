import React, { Component } from 'react';

import Products from './Products';

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

        return (
            <div className="App">
                <h1>Hello, {this.formatName(user)}</h1>
                <Products />
                
                    
            </div>
        );
    }
}

export default App;
