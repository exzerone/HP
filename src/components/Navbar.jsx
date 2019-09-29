import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	height: 70px;
	border-style: solid;
	border-width: 1px;
	margin: 0;
	padding: auto;
	text-align: right;
`;

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	}

	render() {
		return (
			<Container>
				<a>Navigation Bar</a>
				<button>See All Users</button>
			</Container>
		);
	}
}
