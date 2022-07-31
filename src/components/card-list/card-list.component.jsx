import { Component } from "react";
import React from "react";
import './card-list.component.css'
import Card from "../card/card.component"

// export const CardList = props => {
//         return <div className="card-list">{props.children}</div>;
// }

class CardList extends Component {

        render() {
                return <div className="card-list">
                        {this.props.monsters.map((monster) => (

                                <Card key={monster.id} card={monster}></Card>
                        ))}
                </div>;
        }
}

export default CardList;