import * as actionTypes from '../actions/actionTypes'
import cards from '../assets/cards'

const beforeBattleCards = (state = cards, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_BEFORE_BATTLE_SELECT:
      return state.map(card =>
          (card.id === action.id)
              ? {...card, selected: !card.selected}
              : card
      );
    case actionTypes.TOGGLE_BEFORE_BATTLE_HOVER:
      return state.map(card =>
          (card.id === action.id)
              ? {...card, hovered: !card.hovered}
              : card
      );
    default:
      return state;
  }
};

export default beforeBattleCards