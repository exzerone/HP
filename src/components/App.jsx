import React from 'react';
import Frontpage from './Frontpage.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstPage: true
		};
		this.usernameFetch = this.usernameFetch.bind(this);
	}


	render() {
		return (
			<div>
				<Frontpage></Frontpage>
			</div>
		);
	}
}
