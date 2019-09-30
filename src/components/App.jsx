import React, { Component } from 'react';
import Frontpage from './Frontpage.jsx';
import Mainpage from './Mainpage.jsx';
import ProductDetail from './ProductDetail.jsx';

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
		if (!this.state.username) {
			this.setState({ username, mainPage: true });
		}
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
