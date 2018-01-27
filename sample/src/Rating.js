import React,{Component} from 'react';
import {Glyphicon} from 'react-bootstrap';

class Rating extends Component{

    render(){
        return(
            <div>
                <h4>Rating: {this.props.rating}</h4>
                <Glyphicon glyph={this.props.rating >= 1? "star":"star-empty"} />
                <Glyphicon glyph={this.props.rating >= 2 ? "star" : "star-empty"} />
                <Glyphicon glyph={this.props.rating >= 3 ? "star" : "star-empty"} />
                <Glyphicon glyph={this.props.rating >= 4 ? "star" : "star-empty"} />
                <Glyphicon glyph={this.props.rating >= 5 ? "star" : "star-empty"} />


            </div>

        );
    }

}

export default Rating;