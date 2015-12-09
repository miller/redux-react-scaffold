import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
 
class ReactFlowPage extends Component {
	render() {
		const { reactData } = this.props
		let isFetching = reactData.isFetching
		let content = isFetching ? 'Loading...' : reactData.data.tabs.flow.content

		return (
			<div>
				<p className="flow-text">{content}</p>
			</div>
		)

	}
}

ReactFlowPage.propTypes = {

}

function mapStateToProps(state) {
	return {
		reactData: state.react
	}
}

export default connect(mapStateToProps, {
})(ReactFlowPage);