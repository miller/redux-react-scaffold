import { REQUEST_REDUX, RECEIEVE_REDUX } from '../constants'
import reduxJSON from '../../../mocks/redux.json'

function fetchRedux() {
	return {
		type: REQUEST_REDUX
	}
}

function receieveRedux(data) {
	return {
		type: RECEIEVE_REDUX,
		data
	}
}

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
