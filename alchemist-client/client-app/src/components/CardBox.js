import React, {Component} from 'react';
import 'wired-elements';
import Card from './Card'

const cards = [{
    id: 1,
    name: "Jack",
    skills: [{
        name: "fireball",
        element: "fire"
    }, {
        name: "watercrash",
        element: "water"
    }]
},
{
    id: 2,
    name: "Bill",
    skills: [{
        name: "fireball",
        element: "fire"
    }, {
        name: "watercrash",
        element: "water"
    }]
},
{
    id: 3,
    name: "Eric",
    skills: [{
        name: "fireball",
        element: "fire"
    }, {
        name: "watercrash",
        element: "water"
    }]
}
];


class CardBox extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedCard: []
        }
    }
    selectChange(name) {
        let selected = this.state.selectedCard;

        let index = selected.indexOf(name);
        if (index > -1) {
            selected.splice(index, 1);
        } else {
            selected.push(name)
        }

        this.setState({
            selectedCard: selected
        })
    }
    render() {
        return (
            <div>
                {
                    cards.map((card, index) => {
                        return (
                            <Card cardprops={card}
                                  selectChange={(name) => this.selectChange(name)}
                                  selectedNumber={this.state.selectedCard.length}
                                  key={index}/>
                        )
                    })

                }
                {
                    this.state.selectedCard.map((name, index) => {
                        return <div key={index}>{name}</div>
                    })
                }
            </div>
        );
    }
}


export default CardBox;
