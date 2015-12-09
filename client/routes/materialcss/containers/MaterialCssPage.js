import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import loadMaterialCSS from '../../../modules/materialcss/actions/fetch_materialcss.js'

function loadData(props) {
	props.loadMaterialCSS()
}
 
class MaterialCssPage extends Component {

	componentWillMount() {
		loadData(this.props)
	}

	render() {
		const { material } = this.props
		let content

		if (material.isFetching) {
			content = <p className="flow-text">Loading...</p>
		}
		else {
			content = 
			<div>
				<h4>{material.title}</h4>
				<p className="flow-text">
				{material.content}
				</p>
			</div>
		}

		return content
	}
}

MaterialCssPage.propTypes = {

}

function mapStateToProps(state) {
	return {
		material: state.material
	}
}

export default connect(mapStateToProps, {
	loadMaterialCSS
})(MaterialCssPage);