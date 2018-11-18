import { combineReducers } from 'redux'
import BeforeBattleCards from './BeforeBattleCards'
import GamePeriod from './GamePeriod'
import RoomContext from "./RoomContext";

export default combineReducers({
  beforeBattleCards: BeforeBattleCards,
  gamePeriod: GamePeriod,
  roomContext: RoomContext
})