import { REQUEST_MATERIALCSS, RECEIEVE_MATERIALCSS } from '../constants'
import { createAction } from 'redux-actions'
import materialCSSJSON from '../../../mocks/material-css.json'

const fetchMaterialCSS = createAction(REQUEST_MATERIALCSS)
const receieveMaterialCSS = createAction(RECEIEVE_MATERIALCSS)

export default function loadMaterialCSS() {
	return (dispatch, getState) => {
		const materialData = getState().material

		if (materialData && materialData.title ) {
			return null
		}

		dispatch(fetchMaterialCSS())

		setTimeout(()=>dispatch(receieveMaterialCSS(materialCSSJSON)), 1000)
	}
}