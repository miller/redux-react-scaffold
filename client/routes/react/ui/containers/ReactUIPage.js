import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
 
class ReactUIPage extends Component {
	render() {
		const { reactData } = this.props
		let isFetching = reactData.isFetching
		let content = isFetching ? 'Loading...' : reactData.data.tabs.ui.content

		return (
			<div>
				<p className="flow-text">{content}</p>
			</div>
		)

	}
}

ReactUIPage.propTypes = {

}

function mapStateToProps(state) {
	return {
		reactData: state.react
	}
}

export default connect(mapStateToProps, {
})(ReactUIPage);