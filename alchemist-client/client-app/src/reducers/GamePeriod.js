import * as ActionTypes from '../actions/ActionTypes'

const GamePeriod = (state = ActionTypes.BEFORE_BATTLE, action) => {
  switch (action.type) {
    case ActionTypes.BEFORE_BATTLE:
    case ActionTypes.IN_BATTLE:
    case ActionTypes.AFTER_BATTLE:
      return action.type;
    default:
      return state;
  }
};

export default GamePeriod