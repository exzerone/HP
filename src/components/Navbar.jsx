import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: lightgray;
	position: relative;
	width: 100%;
	height: 50px;
	border-style: solid;
	border-width: 1px;
	margin: 0;
	padding: auto;
`;

const UserHistory = styled.button`
	height: 40px;
	width: 140px;
	border-radius: 15px 15px 15px 15px;
	margin: 10px 10px 10px 10px;
`;

const User = styled.div`
	font-family: lato;
	font-size: 20px;
	font-weight: lighter;
	margin-right: 30px;
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
				<User>{`Welcome, ${this.props.username}`}</User>
				<UserHistory>See All Users</UserHistory>
			</Container>
		);
	}
}
