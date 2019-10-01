import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: flex-end;
	align-items: center;
	background-color: #fff;
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
	cursor: pointer;
`;

const User = styled.div`
	font-family: lato;
	font-size: 20px;
	font-weight: lighter;
	margin-right: 30px;
`;

const ReturnToMain = styled.button`
	height: 40px;
	width: 140px;
	border-radius: 15px 15px 15px 15px;
	margin: 10px 65% 10px 10px;
	cursor: pointer;
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
				{this.props.productDetailPage ? (
					<ReturnToMain onClick={this.props.returnToMain}>Go Back</ReturnToMain>
				) : (
					<div></div>
				)}
				<User>{`Welcome, ${this.props.username}`}</User>
				<UserHistory>See All Users</UserHistory>
			</Container>
		);
	}
}
