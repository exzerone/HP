import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar.jsx';

export default class Mainpage extends Component {
	render() {
		return (
			<div>
				<Navbar username={this.props.username} />
			</div>
		);
	}
}
