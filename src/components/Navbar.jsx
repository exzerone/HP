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

const User = styled.div`
	font-family: lato;
	font-size: 20px;
	font-weight: lighter;
	margin-right: 30px;
`;

const ReturnToMain = styled.button`
	outline: none;
	height: 40px;
	width: 140px;
	border-radius: 15px 15px 15px 15px;
	margin: 10px 65% 10px 10px;
	cursor: pointer;
`;

const UserHistory = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	height: 40px;
	width: 140px;
	border-radius: 15px 15px 15px 15px;
	margin: 10px 10px 10px 10px;
	cursor: pointer;
	list-style: none;
	border-style: solid;
	border-width: 1px;
	text-align: center;
`;

const UserMenu = styled.div`
	position: absolute;
	top: 45px;
	right: 10px;
	visibility: ${(props) => (props.expand === false ? 'hidden' : 'visible')};
	z-index: 10;
	width: 140px;
	height: auto;
	display: flex;
	flex-flow: column;
	background-color: #f3f3f3de;
	border-radius: 5px 5px 5px 5px;
	a{
		display: flex;
		text-align: left;
		font-size: 15px;
	}
`;

const UserName = styled.li`
	display: flex;
	flex-flow: column;
	justify-content: center;
	font-family: lato;
	font-size: 17px;
	height: auto;
	align-self: center;
	border-style: solid;
	border-width: 1px;
`;

const UserTag = styled.div`
	font-family: lato;
`;

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			historyExpand: false
		};
		this.menuExpand = this.menuExpand.bind(this);
	}

	menuExpand(e) {
		e.preventDefault();
		this.setState({ historyExpand: !this.state.historyExpand });
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
				<UserHistory onClick={this.menuExpand}>
					<UserTag>See All Users</UserTag>
					<UserMenu className="userMenu" expand={this.state.historyExpand}>
						{this.props.userList.map((user, index) => (
							<UserName key={index}>
								<a className="userName">
									{user.user}
									<span>&#183;</span>
									{user.date}
								</a>
							</UserName>
						))}
					</UserMenu>
				</UserHistory>
			</Container>
		);
	}
}
