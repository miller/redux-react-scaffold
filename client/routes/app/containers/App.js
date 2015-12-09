import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import 'materialize_css/dist/css/materialize.css'
import './App.scss'

class App extends Component {
	render() {
		const { children, router } = this.props
		let content;

		if (router.location.pathname === '/') {
			content = <h1>Redux React Scaffold</h1>
		}

		return (
			<div id="app">
				<Header />
				<div id="body">
				{content}
				{children}
				</div>
				<Footer />
			</div>
		)
	}
}

App.propTypes = {
}

function mapStateToProps(state) {
	return {
		router: state.router
	}
}

export default connect(mapStateToProps, {
	pushState
})(App);