import { REQUEST_REDUX, RECEIEVE_REDUX } from '../constants'

export default function reduxReducer(state = {
	isFetching: true
}, action) {
	switch (action.type) {
		case REQUEST_REDUX:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIEVE_REDUX:
			return Object.assign({}, state, {
				isFetching: false,
				...action.data
			})
		default:
			return state
	}
}