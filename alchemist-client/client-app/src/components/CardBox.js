import React, { Component } from 'react';
import 'wired-elements';

const cards = [{
    name: "Jack",
    skills: [{
        name: "fireball",
        element: "fire"
    },{
        name: "watercrash",
        element: "water"
    }]},{
    name: "Bill",
    skills: [{
        name: "fireball",
        element: "fire"
    },{
        name: "watercrash",
        element: "water"
    }]},{
    name: "Eric",
    skills: [{
        name: "fireball",
        element: "fire"
    },{
        name: "watercrash",
        element: "water"
    }]}
];


class CardBox extends Component {
  render() {
    return (
        <div>
            {
                cards.map(function (card, index) {
                    return (<wired-card key={index}>{card.name}
                    <wired-checkbox></wired-checkbox>
                        </wired-card>
                        )
                })
            }
        </div>
    );
  }
}



export default CardBox;
