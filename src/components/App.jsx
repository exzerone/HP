import React from 'react';
import Frontpage from './Frontpage.jsx';

export default class App extends React.Component {
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
			this.setState({ username, firstPage: false });
		}
	}

	render() {
		const frontPage = this.state.frontPage;
		let page;
		page = frontPage ? (
			<Frontpage usernameFetch={this.usernameFetch}></Frontpage>
		) : (
			<div>Hi</div>
		);
		return <div>{page}</div>;
	}
}
