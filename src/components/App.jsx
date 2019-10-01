import React, { Component } from 'react';
import Frontpage from './Frontpage.jsx';
import Mainpage from './Mainpage.jsx';
import Axios from 'axios';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			frontPage: true,
			productPage: false,
			mainPage: false,
			productData: null
		};
		this.usernameFetch = this.usernameFetch.bind(this);
	}

	usernameFetch(username) {
		Axios.post('/user', { user: username })
			.then((result) => {
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
		this.setState({ username, mainPage: true });
	}

	render() {
		let page;
		page = !this.state.mainPage ? (
			<Frontpage usernameFetch={this.usernameFetch} />
		) : (
			<Mainpage username={this.state.username} />
		);
		return <div>{page}</div>;
	}
}
