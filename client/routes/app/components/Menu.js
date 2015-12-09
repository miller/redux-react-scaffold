import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Menu extends Component {
	render() {
		return (
			<ul className="side-menu">
				<li>
					<Link to="/home">
						<span className="active">HOME</span>
					</Link>
				</li>
				<li>
					<Link to="/about">
						<span className="active">ABOUT</span>
					</Link>
				</li>
			</ul>
		)
	}
}