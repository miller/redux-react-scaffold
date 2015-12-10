import { REQUEST_REDUX, RECEIEVE_REDUX } from '../constants'
import { createAction } from 'redux-actions';
import reduxJSON from '../../../mocks/redux.json'

const fetchRedux = createAction(REQUEST_REDUX)
const receieveRedux = createAction(RECEIEVE_REDUX)

export default function loadRedux() {
	return (dispatch, getState) => {
		const reduxData = getState().redux

		if (reduxData && reduxData.title) {
			return null
		}

		dispatch(fetchRedux())
		setTimeout(()=>dispatch(receieveRedux(reduxJSON)), 1000)
	}
}
