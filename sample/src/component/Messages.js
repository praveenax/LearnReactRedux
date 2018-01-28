import React, { Component } from 'react';

import * as firebase from 'firebase';

import {Table,Navbar,Nav} from 'react-bootstrap';
import Notification from 'react-web-notification';

class Messages extends Component {

    

    constructor(props) {
        super(props);
        

        this.state = {
            ignore: true,
            title: '',
            messages: []
        };

    }

    handleButtonClick() {

        if (this.state.ignore) {
            return;
        }

        const now = Date.now();

        const title = 'React-Web-Notification' + now;
        const body = 'Hello' + new Date();
        const tag = now;
        const icon = 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png';
        // const icon = 'http://localhost:3000/Notifications_button_24.png';

        // Available options
        // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
        const options = {
            tag: tag,
            body: body,
            icon: icon,
            lang: 'en',
            dir: 'ltr'
            // no browsers supported https://developer.mozilla.org/en/docs/Web/API/notification/sound#Browser_compatibility
        }
        this.setState({
            title: title,
            options: options
        });

    }

    handlePermissionGranted() {
        
        this.setState({
            ignore: false
        });
    }
    handlePermissionDenied() {
       
        this.setState({
            ignore: true
        });
    }
    handleNotSupported() {
       
        this.setState({
            ignore: true
        });
    }

    handleNotificationOnClick(e, tag) {
        console.log(e, 'Notification clicked tag:' + tag);
    }

    handleNotificationOnError(e, tag) {
        console.log(e, 'Notification error tag:' + tag);
    }

    handleNotificationOnClose(e, tag) {
        console.log(e, 'Notification closed tag:' + tag);
    }

    handleNotificationOnShow(e, tag) {
        // this.playSound();
        console.log(e, 'Notification shown tag:' + tag);
    }

    callNotify(lastMessage){
        const title = '' + lastMessage.senderId;
        // const title = '' + lastMessage.messageBody;

        const body = '' + lastMessage.messageBody;
        const tag = 'tag';
        const icon = 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png';
        // const icon = 'http://localhost:3000/Notifications_button_24.png';

        // Available options
        // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
        const options = {
            tag: tag,
            body: body,
            // icon: icon,
            lang: 'en',
            dir: 'ltr',
            timeout: 20000
            // no browsers supported https://developer.mozilla.org/en/docs/Web/API/notification/sound#Browser_compatibility
        }
        this.setState({
            title: title,
            options: options
        });
    }

    componentDidUpdate(){

        console.log();
        var lastMessage = this.state.messages[0];
        if(lastMessage != undefined){
            console.log(lastMessage);
            // this.callNotify(lastMessage);
        }
        
    }

    componentDidMount() {


        // firebase.database().ref().child('messages').child('+919840303269').on('child_added', snapshot => {
        //     console.log(snapshot.val());

        // });

        
        firebase.database().ref().child('messages').child('+919840303269').on('value', snapshot => {
            // firebase.database().ref().child('messages').child('9901880718').on('value', snapshot => {
            

            var messageData = snapshot.val();

            // console.log(messageData['messages']);

            let returnArr = [];

            

            if (messageData !== undefined){

                

                var lastMessage = "";
                for(var i in messageData){
                    messageData[i].key = i;
                    messageData[i].time = (new Date(messageData[i].timeStamp)).toString();
                    
                    lastMessage = messageData[i];
                    returnArr.push(messageData[i]);
                }

                if(lastMessage != undefined){

                    this.callNotify(lastMessage);
                    
                }
                
            }
            

            this.setState({
                messages: returnArr
            });
        });
    }

    render() {

        
        const listMessages = this.state.messages.reverse().map((message) =>
            <tr key={message.key}>
                <td>{message.senderId}</td>
                <td>{message.time}</td>
                
                <td>{message.messageBody}</td>

            </tr>
        );

        return (

            <div>

                <Notification
                    ignore={this.state.ignore && this.state.title !== ''}
                    notSupported={this.handleNotSupported.bind(this)}
                    onPermissionGranted={this.handlePermissionGranted.bind(this)}
                    onPermissionDenied={this.handlePermissionDenied.bind(this)}
                    onShow={this.handleNotificationOnShow.bind(this)}
                    onClick={this.handleNotificationOnClick.bind(this)}
                    onClose={this.handleNotificationOnClose.bind(this)}
                    onError={this.handleNotificationOnError.bind(this)}
                    timeout={5000}
                    title={this.state.title}
                    options={this.state.options}
                />
                {/* <button onClick={this.handleButtonClick.bind(this)}>Notif!</button> */}

                <Navbar style={navbarStyle}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home" style={headerStyle}>Message Notifier</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        {/* <NavItem eventKey={1} href="#">
                            Link
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                        </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown> */}
                    </Nav>
                </Navbar>;

                <Table bordered condensed style={tableStyle} >
                    <thead>
                        <tr>
                            <th className="tableHeader" >SenderID</th>
                            <th className="tableHeader" >Time</th>
                            
                            <th className="tableHeader">Message Body</th>

                        </tr>
                    </thead>
                    <tbody>
                        {listMessages}
                       
                    </tbody>
                </Table>


            </div>

        );
    };

}

export default Messages;

var tableStyle = {
    width:"60%",
    margin:"auto"
}

var navbarStyle = {
    background:"#f39c12"
}

var headerStyle ={
    color:"#fff"
}