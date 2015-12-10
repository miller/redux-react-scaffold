import { REACT_REQUEST, REACT_RECEIEVE } from '../constants'
import { createAction } from 'redux-actions';
import reactJSON from '../../../mocks/react.json'

const fetchReact = createAction(REACT_REQUEST)
const receieveReact = createAction(REACT_RECEIEVE)

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

