import React, { Component } from 'react';
import './App.css';

import Github from './component/Github';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

class App3 extends Component {

    render() {
        return (
            <div className="App">
                <Header />
            </div>
        );
    }
}

export default App3;


class Header extends Component{

    render(){
        return(

            <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/github" component={Github} />
                    <Route path="/" component={Home} />
                    <Route path="/*" component={NotFound} />
                    
                </Switch>

            </div>
                </BrowserRouter>
            

        );
    }

}

class Home extends Component {

    render() {
        return (

            <div>
                Home

            </div>


        );
    }

}

class NotFound extends Component {

    render() {
        return (

            <div>

                Not Found

            </div>


        );
    }

}