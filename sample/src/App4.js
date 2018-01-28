import React, { Component } from 'react';
import './App.css';

import Github from './component/Github';

import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import {Nav,Navbar,NavItem, Button} from 'react-bootstrap';

class App4 extends Component {

    render() {
        return (
            <div className="App">
                <Header />
            </div>
        );
    }
}

export default App4;


class Header extends Component {

    render() {
        return (

            <BrowserRouter>
                <div>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#" >React Bootstrap </a>
                            </Navbar.Brand>
                            
                        </Navbar.Header>
                   
                        <Nav>
                            <NavItem>
                                <Link to="/">Home</Link>
                                
                            </NavItem>

                            <NavItem>
                                <Link to="/github">Github</Link>

                            </NavItem>

                        </Nav>

                    </Navbar>
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

    constructor(props){
        super(props);
        this.navTo = this.navTo.bind(this);

    }

    navTo(e){
        this.props.history.push("/github");
    }

    render() {
        return (

            <div>
                Home

                <br />

                <Button onClick={this.navTo} >Go to Github</Button>

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