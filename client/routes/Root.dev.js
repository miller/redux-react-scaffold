import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import DevTools from './DevTools'

export default class Root extends Component {
	render() {
		const { store } = this.props
		const devTool = <DevTools />
		return (
			<Provider store={store}>
				<div>
					<ReduxRouter />
				{/*devTool*/}
				</div>
			</Provider>
		)
	}
}

Root.propTypes = {
	store: PropTypes.object.isRequired
}