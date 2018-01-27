import React, { Component } from 'react';

import Products from './Products';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>My First React App!</h1>
                <Products />
                <Products />
                <Products />
                    
            </div>
        );
    }
}

export default App;
