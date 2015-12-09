import { REQUEST_MATERIALCSS, RECEIEVE_MATERIALCSS } from '../constants'
import materialCSSJSON from '../../../mocks/material-css.json'

function fetchMaterialCSS() {
	return {
		type: REQUEST_MATERIALCSS
	}
}

function receieveMaterialCSS(data) {
	return {
		type: RECEIEVE_MATERIALCSS,
		payload: {
			...data
		}
	}
}

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