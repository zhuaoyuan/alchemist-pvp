import React from 'react';
import 'wired-elements';


const Card = ({id, name, selected, hovered, skills, description,
                toggleBeforeBattleSelect, toggleBeforeBattleHover, selectFull}) => {

        let tooltip = hovered ? <wired-tooltip text={description}></wired-tooltip> : <div/>;
        let checkbox = (selectFull && !selected)
            ?<wired-checkbox class="disabled"/>
            :<wired-checkbox id={id} onClick={()=>toggleBeforeBattleSelect(id)} />;
        return (
            <wired-card onMouseEnter={()=>toggleBeforeBattleHover(id)} onMouseLeave={()=>toggleBeforeBattleHover(id)}>
                {name}
                {tooltip}
                {checkbox}
            </wired-card>
        );
    };


export default Card;
