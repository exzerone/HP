import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
	top: 150px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 500px;
	height: 220px;
	background-color: white;
	text-align: center;
	vertical-align: center;
	margin: auto;
	padding: auto;
	position: relative;
	border-style: solid;
	border-width: 1px;
`;

const Greeting = styled.div`
	font-size: 23px;
	font-family: lato;
	font-weight: lighter;
`;

const InputForm = styled.form`
	text-align: center;
	margin-right: 40px;
`;

const Input = styled.input`
	outline: none;
	width: 200px;
	height: 30px;
	margin-left: 10px;
	font-size: 20px;
	font-weight: normal;
`;

const Submit = styled.button`
	position: absolute;
	outline: none;
	height: 36px;
	background-color: #fff;
`;

const Prompt = styled.label`
	font-size: 23px;
	font-weight: lighter;
	font-family: lato;
`;

export default class Frontpage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		};
		this.userInput = this.userInput.bind(this);
		this.userSubmit = this.userSubmit.bind(this);
	}

	userInput(e) {
		e.preventDefault();
		this.setState({ query: e.target.value });
	}

	userSubmit(e) {
		e.preventDefault();
		if (/\S/.test(this.state.query)) {
			this.props.usernameFetch(this.state.query);
		} else {
			window.alert('Please enter your name!');
		}
	}

	render() {
		return (
			<Container className="container">
				<Greeting>Please Log In To enter the site</Greeting>
				<InputForm>
					<Prompt>Enter your name: </Prompt>
					<Input type="text" onChange={this.userInput}></Input>
					<Submit onClick={this.userSubmit} type="submit">
						Enter
					</Submit>
				</InputForm>
			</Container>
		);
	}
}
