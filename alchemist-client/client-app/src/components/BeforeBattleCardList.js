import React, {Component} from 'react';
import 'wired-elements';
import Card from './Card'

const BeforeBattleCardList = ({cards, selectFull, toggleBeforeBattleSelect, toggleBeforeBattleHover}) => (
    <div>
      {
        cards.map((card, index) => {
          return (
              <Card {...card}
                    selectFull = {selectFull}
                    toggleBeforeBattleSelect = {toggleBeforeBattleSelect}
                    toggleBeforeBattleHover = {toggleBeforeBattleHover}
                    key={index}/>
          )
        })

      }
    </div>
);


export default BeforeBattleCardList;
