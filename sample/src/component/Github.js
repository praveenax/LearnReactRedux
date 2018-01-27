import React, {Component} from 'react';

import axios from 'axios';
import ReactLoading from 'react-loading';
import { Media, MediaDevice, Form, FormGroup, FormControl, Button} from 'react-bootstrap';

class Github extends Component{

    constructor(){
        super();
        this.state = {
            isLoading:true,
            data:[],
            searchTerm:"",
            listUsers:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            isLoading:true
        });

        this.getGithubData(this.state.searchTerm);
    }

    handleChange(e) {
        // e.preventDefault();
        this.setState(
            {
                searchTerm:e.target.value
            }
        );
        
    }
    

    componentDidMount(){
        this.getGithubData('praveena');
    }

    getGithubData(_search_term){
        axios.get('https://api.github.com/search/users?q='+_search_term).then(res=>{
            this.setState({
                isLoading:false,
                data:res.data.items
            });
            console.log(res.data.items);
        });
    }

    render(){

        this.state.listUsers = this.state.data.map((user) => 
            <Media key={user.id} className="gitresult" >

                <Media.Left>
                    <a href={user.html_url}>

                        <img width={64} height={64} src={user.avatar_url} alt="Image" />

                    </a>

                </Media.Left>

                <Media.Body>
                    <Media.Heading>
                        {user.login}
                    </Media.Heading>
                    <p>Score:{user.score}
                    </p>
                </Media.Body>
                    

            </Media>
        );
        return(
            <div>

                <Form inline onSubmit={this.handleSubmit} >

                    <FormGroup controlId="formInlineName">
                        <FormControl type="text" value={this.state.searchTerm} placeholder="Enter Search Term" onChange={this.handleChange} />
                    </FormGroup>

                    {' '}

                    <Button type="submit" >Search</Button>


                </Form>

                <h3> Github Users Results </h3>
                <div style={divStyle}>
                    { this.state.listUsers }
                </div>
                
                

            </div>

        );
    }
}

export default Github;


var divStyle = {
    width: '50%',
    margin: 'auto'
}


// {
//     this.state.isLoading &&
//         // <h4>Getting Data...</h4>
//         <ReactLoading type="spinningBubbles" color="#444" />
// }