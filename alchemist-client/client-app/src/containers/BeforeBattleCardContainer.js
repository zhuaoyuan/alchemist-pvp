import { connect } from 'react-redux'
import {toggleBeforeBattleSelect} from "../actions";
import {toggleBeforeBattleHover} from "../actions";
import {MAX_SELECTED_CARD_NUM} from "../config/baseConfig";
import BeforeBattleCardList from "../components/BeforeBattleCardList";

const mapStateToProps = state => ({
  cards: state.beforeBattleCards,
  selectFull: state.beforeBattleCards.filter(card=>card.selected).length === MAX_SELECTED_CARD_NUM
});

const mapDispatchToProps = dispatch => ({
  toggleBeforeBattleSelect: id => dispatch(toggleBeforeBattleSelect(id)),
  toggleBeforeBattleHover: id => dispatch(toggleBeforeBattleHover(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BeforeBattleCardList)
