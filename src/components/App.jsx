import React, { Component } from 'react';
import Frontpage from './Frontpage.jsx';
import Mainpage from './Mainpage.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: null,
			frontPage: true,
			productPage: false
		};
		this.usernameFetch = this.usernameFetch.bind(this);
	}

	usernameFetch(username) {
		if (!this.state.username) {
			this.setState({ username, frontPage: false });
		}
	}

	render() {
		const frontPage = this.state.frontPage;
		let page;
		page = frontPage ? (
			<Frontpage usernameFetch={this.usernameFetch} />
		) : (
			<Mainpage username={this.state.username} />
		);
		return <div>{page}</div>;
	}
}
