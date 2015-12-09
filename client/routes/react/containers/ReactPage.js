import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import loadReact from '../../../modules/react/actions/react_fetch'
import './ReactPage.scss'

function loadData(props) {
	props.loadReact()
}
 
class ReactPage extends Component {

	componentWillMount() {
    loadData(this.props)
  }

	render() {
		const { children, router, reactData } = this.props
		let loading
		let disabled = ''

		if (reactData.isFetching) {
			loading = <span className="loading"> LOADING... </span>
			disabled = 'disabled'
		}

		return (
			<div id="react-page">
				<h4>REACT {loading} </h4>
				<div className="row">
			    <div className="col s12">
			      <ul className="tabs z-depth-1">
			        <li className={`tab col s3 ${disabled}`}>
			        	<Link 
			        		className={router.location.pathname==='/react/ui'  ? 'active': null } 
			        		to="/react/ui">
			        			JUST THE UI
			        	</Link>
			        	<div className="indicator"></div>
			        </li>
			        <li className={`tab col s3 ${disabled}`}>
			        	<Link 
			        		className={router.location.pathname==='/react/dom'  ? 'active': null } 
			        		to="/react/dom">
			        			VIRTUAL DOM
			        	</Link>
			        	<div className="indicator"></div>
			        </li>
			        <li className={`tab col s3 ${disabled}`}>
			        	<Link 
			        		className={router.location.pathname==='/react/flow'  ? 'active': null } 
			        		to="/react/flow">
			        			DATA FLOW
			        	</Link>
			        	<div className="indicator"></div>
			        </li>
			      </ul>
			    </div>
			    <div className="col s12">
			    	{children}
			    </div>
			  </div>
			</div>
		)

	}
}

ReactPage.propTypes = {

}

function mapStateToProps(state) {
	return {
		reactData: state.react,
		router: state.router
	}
}

export default connect(mapStateToProps, {
	loadReact
})(ReactPage);