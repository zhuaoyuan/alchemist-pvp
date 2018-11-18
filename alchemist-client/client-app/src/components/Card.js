import React from 'react';
import 'wired-elements';


const Card = ({id, name, selected, hovered, skills, toggleBeforeBattleSelect, toggleBeforeBattleHover, selectFull}) => {

        let description = hovered ? <wired-tooltip text="xxx"></wired-tooltip> : <div/>;
        let checkbox = (selectFull && !selected)
            ?<wired-checkbox class="disabled"/>
            :<wired-checkbox id={id} onClick={()=>toggleBeforeBattleSelect(id)} />;
        return (
            <wired-card onMouseEnter={()=>toggleBeforeBattleHover(id)} onMouseLeave={()=>toggleBeforeBattleHover(id)}>
                {name}
                {description}
                {checkbox}
            </wired-card>
        );
    };


export default Card;
