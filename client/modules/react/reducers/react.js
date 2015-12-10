import { REACT_REQUEST, REACT_RECEIEVE } from '../constants'
import { handleActions } from 'redux-actions';

const reactReducer = handleActions({
	REACT_REQUEST: (state, action) => Object.assign({}, state, {
		isFetching: true
	}),
	REACT_RECEIEVE: (state, action) => Object.assign({}, state, {
		isFetching: false,
		data: action.payload
	})
},
{
	isFetching: true
})

export default reactReducer