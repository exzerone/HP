import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Axios from 'axios';
import ProductListing from './ProductListing.jsx';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export default class Mainpage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productData: []
		};
	}

	componentDidMount() {
		Axios.get('/products')
			.then((result) => {
				const { data } = result;
				this.setState({ productData: data }, () => {
					console.log('this is this state', this.state.productData);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<Navbar username={this.props.username} />
				<Container>
					{this.state.productData.map((item, index) => (
						<ProductListing key={index} data={item}></ProductListing>
					))}
				</Container>
			</div>
		);
	}
}
