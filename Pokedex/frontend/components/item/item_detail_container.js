import { connect } from 'react-redux'; 
import * as selector from '../../reducers/selectors';
import ItemDetail from './item_detail';
const mapStateToProps = (state, ownProps) => ({
  // item: state.entities.item[ownProps.match.params.itemId]
  item: selector.selectPokemonItem(state, ownProps.match.params.itemId)
})

const mapDispatchToProps = 


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail); 