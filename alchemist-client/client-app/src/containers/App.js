import React from 'react';
import { connect } from 'react-redux'
import ROOM_STAUS from "../enums/RoomStatus";
import BeforeBattleContainer from './BeforeBattleContainer'
import InBattleContainer from "./InBattleContainer";

const App = ({roomContext}) => {
  switch (roomContext.roomStatus) {
    case ROOM_STAUS.NO_ROOM:
      return (
          <div>
            <BeforeBattleContainer/>
          </div>
      );
    default:
      return (
          <div>
            <InBattleContainer/>
          </div>
      );
  }
};
const mapStateToProps = ({ roomContext }) => ({ roomContext });

export default connect(mapStateToProps)(App);