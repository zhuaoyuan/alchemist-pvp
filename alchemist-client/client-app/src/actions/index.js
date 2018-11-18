export const toggleBeforeBattleSelect = id => ({
  type: 'TOGGLE_BEFORE_BATTLE_SELECT',
  id
});

export const toggleBeforeBattleHover = id => ({
  type: 'TOGGLE_BEFORE_BATTLE_HOVER',
  id
});

export const joinRoomRequest = () => ({
  type: 'CREATE_ROOM',
  localPlayer: 'x'
});
