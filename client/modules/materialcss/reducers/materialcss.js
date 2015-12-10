import { REQUEST_MATERIALCSS, RECEIEVE_MATERIALCSS } from '../constants'
import { handleActions } from 'redux-actions'

const materialCSSReducer = handleActions({
	REQUEST_MATERIALCSS: (state, action) => Object.assign({}, state, {
		isFetching: true
	}),
	RECEIEVE_MATERIALCSS: (state, action) => Object.assign({}, state, {
		isFetching: false,
		...action.payload
	})
}, { isFetching: true })

export default materialCSSReducer