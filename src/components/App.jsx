import React from 'react';
import Frontpage from './Frontpage.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstPage: true
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
