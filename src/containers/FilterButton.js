import { connect } from 'react-redux'
import Button from '../components/Button'

import { setFilter } from '../actions'

const mapStateToProps = ({filterReducer}, {filter}) => ({
  active: filter === filterReducer
})

const mapDispatchToProps = (dispatch, {filter}) => ({
  onClick: () => dispatch(setFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
