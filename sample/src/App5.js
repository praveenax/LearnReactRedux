import React, { Component } from 'react';
import './App.css';

// import * as firebase from 'firebase';

// import Users from './component/Users';
import Messages from './component/Messages';


class App extends Component {

    constructor(props){
        super(props);
        // console.log(firebase);
        
    }

    

    render() {
        return (
            <div className="App">
               {/* <h2>Test</h2> */}
               {/* <Users /> */}
               
               <Messages />
               
            </div>
        );
    }
}

export default App;

