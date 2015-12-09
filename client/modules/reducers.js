import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'
import reactReducer from './react/reducers/react'
import reduxReducer from './redux/reducers/redux'
import materialCSSReducer from './materialcss/reducers/materialcss'

export default combineReducers({
	react: reactReducer,
	redux: reduxReducer,
	material: materialCSSReducer,
	router
})