import * as t from '../constants'

const filterReducer = (state = t.filter.BYDATE , action) => {
  switch (action.type) {
    case t.SET_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

export default filterReducer
