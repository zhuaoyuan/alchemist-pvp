import { connect } from 'react-redux'
import {toggleBeforeBattleSelect} from "../actions";
import {toggleBeforeBattleHover} from "../actions";
import {joinRoomRequest} from "../actions";
import {MAX_SELECTED_CARD_NUM} from "../config/baseConfig";
import BeforeBattleBoard from "../components/BeforeBattleBoard";

const mapStateToProps = state => ({
  cards: state.beforeBattleCards,
  selectFull: state.beforeBattleCards.filter(card=>card.selected).length === MAX_SELECTED_CARD_NUM
});

const mapDispatchToProps = dispatch => ({
  toggleBeforeBattleSelect: id => dispatch(toggleBeforeBattleSelect(id)),
  toggleBeforeBattleHover: id => dispatch(toggleBeforeBattleHover(id)),
  joinRoomRequest: () => dispatch(joinRoomRequest())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BeforeBattleBoard)
