import React, {Component} from 'react';

import * as firebase from 'firebase';

class Users extends Component{

    constructor(props){
        super(props);
        this.state = {
            users:[]
        }

    }

    componentDidMount(){

        console.log("CDM");
        firebase.database().ref('/').on('value',snapshot => {
            console.log(snapshot.val());
            let returnArr = [];

            snapshot.forEach(data => {
                console.log(data);
                var user = data.val();
                user['key'] = data.key;
                returnArr.push(user);
            });

            this.setState({
                users:returnArr
            });
        });
    }

    render(){

        console.log(this.state.users);

        const listUsers = this.state.users.map((user) => 
            <tr key={user.key}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                
            </tr>
        );

        return(

            <div>

                <table>
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                        
                        {listUsers}
                    </tbody>
                </table>

                
            </div>

        );
    };

}

export default Users;