import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
	render() {
		return (
			<nav>
		    <div className="nav-wrapper row">
		    	<div className="col s12">
			      <Link to="/" className="brand-logo">Redux React Scaffold</Link>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			        <li><Link to="/react">React</Link></li>
			        <li><Link to="/redux">Redux</Link></li>
			        <li><Link to="/materialize-css">MaterializeCSS</Link></li>
			      </ul>
		      </div>
		    </div>
		  </nav>
		)
	}
}
