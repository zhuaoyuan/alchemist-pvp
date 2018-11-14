import React, {Component} from 'react';
import 'wired-elements';

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


class Card extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            hover: false,
            cardprops: props.cardprops,
            selected: false
        }
    }
    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    }
    toggleCheckbox = () => {
        this.setState({selected: !this.state.selected});
        this.props.selectChange(this.props.cardprops.name);
    }
    render() {
        let description = this.state.hover ? <wired-tooltip text="xxx"></wired-tooltip> : <div/>
        let checkbox = (this.props.selectedNumber>1 && !this.state.selected)
            ?<wired-checkbox class="disabled"/>
            :<wired-checkbox id={this.props.cardprops.id} onClick={this.toggleCheckbox} />
        return (
            <wired-card onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                {this.props.cardprops.name}
                {description}
                {checkbox}
            </wired-card>
        );
    }
}


export default Card;
