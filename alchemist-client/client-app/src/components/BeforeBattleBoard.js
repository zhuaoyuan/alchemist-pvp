import React from 'react';
import { WiredButton, WiredInput } from "wired-elements"
import Card from './Card'

const BeforeBattleBoard = ({cards, selectFull,
                             toggleBeforeBattleSelect,
                             toggleBeforeBattleHover,
                             joinRoomRequest}) => (
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
      <div>
        <wired-input placeholder="Enter name"></wired-input>
        <wired-input placeholder="Enter room number"></wired-input>
        <wired-button onClick={()=>joinRoomRequest()}>Join Room!</wired-button>
      </div>
    </div>
);


export default BeforeBattleBoard;
