import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
 
class ReactDomPage extends Component {
	render() {
		const { reactData } = this.props
		let isFetching = reactData.isFetching
		let content = isFetching ? 'Loading...' : reactData.data.tabs.dom.content

		return (
			<div>
				<p className="flow-text">{content}</p>
			</div>
		)

	}
}

ReactDomPage.propTypes = {

}

function mapStateToProps(state) {
	return {
		reactData: state.react
	}
}

export default connect(mapStateToProps, {
})(ReactDomPage);