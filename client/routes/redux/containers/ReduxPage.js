import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import loadRedux from '../../../modules/redux/actions/redux_fetch'
 
function loadData(props) {
	props.loadRedux()
}

class ReduxPage extends Component {
	componentWillMount() {
    loadData(this.props)
  }

	render() {
		const { redux: reduxData } = this.props
		let content

		if (reduxData.isFetching) {
			content = <p className="flow-text">Loading...</p>
		}
		else {
			content  = (
				<div>
					<h4>{reduxData.title}</h4>
					<p className="flow-text">
						{reduxData.content}
					</p>
				</div>
			)
		}

		return content
	}
}

ReduxPage.propTypes = {

}

function mapStateToProps(state) {
	return {
		redux: state.redux
	}
}

export default connect(mapStateToProps, {
	loadRedux
})(ReduxPage);