import React from 'react';
import Frontpage from './Frontpage.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username:null,
			firstPage: true,
			productPage: false
		};
	}

	render() {
		return (
			<div>
				<Frontpage></Frontpage>
			</div>
		);
	}
}
