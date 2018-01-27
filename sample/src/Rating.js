import React,{Component} from 'react';
import {Glyphicon} from 'react-bootstrap';

class Rating extends Component{

    constructor(props){
        super(props);

        this.state = {
            rating:this.props.rating
        };
    }

    handleClick(ratingValue){
        console.log(ratingValue);
        console.log("test");
        
        this.setState({rating:ratingValue});
    }

    render(){
        return(
            <div>
                <h4>Rating: {this.state.rating} </h4>
                <h3>
                    <Glyphicon glyph={this.state.rating >= 1? "star":"star-empty"} onClick={this.handleClick.bind(this,1)} />
                    <Glyphicon glyph={this.state.rating >= 2 ? "star" : "star-empty"} onClick={this.handleClick.bind(this, 2)} />
                    <Glyphicon glyph={this.state.rating >= 3 ? "star" : "star-empty"} onClick={this.handleClick.bind(this, 3)} />
                    <Glyphicon glyph={this.state.rating >= 4 ? "star" : "star-empty"} onClick={this.handleClick.bind(this, 4)} />
                    <Glyphicon glyph={this.state.rating >= 5 ? "star" : "star-empty"} onClick={this.handleClick.bind(this, 5)} />
                </h3>

            </div>

        );
    }

}

export default Rating;