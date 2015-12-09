import * as ActionTypes from '../constants'

export default function reactReducer(state = {
	isFetching: true
}, action) {
	switch (action.type) {
		case ActionTypes.REACT_REQUEST:
			state = Object.assign({}, state, {
				isFetching: true
			})
			return state
		case ActionTypes.REACT_RECEIEVE:
			state = Object.assign({}, state, {
				isFetching: false,
				data: action.payload
			})
			return state
		default:
			return state
	}
}