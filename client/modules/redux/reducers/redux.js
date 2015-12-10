import { REQUEST_REDUX, RECEIEVE_REDUX } from '../constants'
import { handleActions } from 'redux-actions';

const reduxReducer = handleActions({
  REQUEST_REDUX: (state, action) => Object.assign({}, state, {
		isFetching: true
	}),

	RECEIEVE_REDUX: (state, action) => Object.assign({}, state, {
		isFetching: false,
		...action.payload
	})
}, { isFetching: true })

export default reduxReducer