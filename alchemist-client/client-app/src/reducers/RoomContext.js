import * as ActionTypes from '../actions/ActionTypes'
import ROOM_STATUS from '../enums/RoomStatus'

const RoomContext = (state = {roomStatus: ROOM_STATUS.NO_ROOM}, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_ROOM:
      return {
        roomStatus: ROOM_STATUS.WAITING_IN_ROOM,
        localPlayer: action.localPlayer
      };
    case ActionTypes.ROOM_FULL:
      return {
        roomStatus: ROOM_STATUS.ROOM_FULL,
        localPlayer: action.localPlayer,
        remotePlayer: action.remotePlayer};
    default:
      return state;
  }
};

export default RoomContext