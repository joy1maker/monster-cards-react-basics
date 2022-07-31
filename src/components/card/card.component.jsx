import React, { Component } from "react";
import "./card.sytles.css"

class Card extends Component {


    render() {

        return (
            <div className="card-container">
                <img alt="monster" src={`https://robohash.org/${this.props.card.id}?set=set1`}></img>
                <h2>{this.props.card.name}</h2>
                <p> {this.props.card.email}</p>
            </div>
        );
    }

}

export default Card;