import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	width: 200px;
	height: 30px;
`;

const Submit = styled.button`
	height: 37px;

	background-color: white;
`;

const Container = styled.div`
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
`;

const Prompt = styled.label`
	font-size: 23px;
	font-weight: lighter;
	font-family: lato;
`;

export default class Frontpage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: null
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
		this.props.usernameFetch(this.state.query)
	}

	render() {
		return (
			<Container>
				<Greeting>Please Log In To enter the site</Greeting>
				<InputForm>
					<Prompt>Enter your name: </Prompt>
					<Input onChange={this.userInput}></Input>
					<Submit onClick={this.userSubmit} type="submit">
						Enter
					</Submit>
				</InputForm>
			</Container>
		);
	}
}
