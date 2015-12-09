import { REQUEST_MATERIALCSS, RECEIEVE_MATERIALCSS } from '../constants'

export default function materialCSSReducer(state = {
	isFetching: true
}, action) {
	switch(action.type) {
		case REQUEST_MATERIALCSS:
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIEVE_MATERIALCSS:
			return Object.assign({}, state, {
				isFetching: false,
				...action.data
			})
		default:
			return state
	}
}