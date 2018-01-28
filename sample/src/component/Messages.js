import React, { Component } from 'react';

import * as firebase from 'firebase';

class Messages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }

    }

    componentDidMount() {

        console.log("CDM");
        // firebase.database().ref().child('messages').child('+919840303269').on('value', snapshot => {
            firebase.database().ref().child('messages').child('+919901880718').on('value', snapshot => {
            

            var messageData = snapshot.val();

            console.log(messageData);
            // console.log(messageData['messages']);

            console.log(snapshot.val());
            let returnArr = [];

            

            if (messageData != undefined){
                for(var i in messageData){
                    console.log(i);
                    console.log(messageData[i]);
                    messageData[i].key = i;
                    messageData[i].time = (new Date(messageData[i].timeStamp)).toString();
                    
                    returnArr.push(messageData[i]);
                }

                
            }
            

            this.setState({
                messages: returnArr
            });
        });
    }

    render() {

        console.log(this.state.messages);

        const listMessages = this.state.messages.reverse().map((message) =>
            <tr key={message.key}>
                <td>{message.senderId}</td>
                <td>{message.time}</td>
                
                <td>{message.messageBody}</td>

            </tr>
        );

        return (

            <div>

                <table>
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
                </table>


            </div>

        );
    };

}

export default Messages;