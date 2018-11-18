import * as ActionTypes from '../actions/ActionTypes'
import cards from '../assets/Cards'

const BeforeBattleCards = (state = cards, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_BEFORE_BATTLE_SELECT:
      return state.map(card =>
          (card.id === action.id)
              ? {...card, selected: !card.selected}
              : card
      );
    case ActionTypes.TOGGLE_BEFORE_BATTLE_HOVER:
      return state.map(card =>
          (card.id === action.id)
              ? {...card, hovered: !card.hovered}
              : card
      );
    default:
      return state;
  }
};

export default BeforeBattleCards