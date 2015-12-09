import { REACT_REQUEST, REACT_RECEIEVE } from '../constants'
import reactJSON from '../../../mocks/react.json'

// mock async data request
function fetchReact() {
	return {
		type: REACT_REQUEST
	}
}

function receieveReact(data) {
	return {
		type: REACT_RECEIEVE,
		data
	}
}

export default function loadReact() {
  return (dispatch, getState) => {
    const reactData = getState().react
    if (reactData && reactData.data) {
      return null
    }

    dispatch(fetchReact())
    setTimeout(()=>dispatch(receieveReact(reactJSON)), 1000)
  }
}

