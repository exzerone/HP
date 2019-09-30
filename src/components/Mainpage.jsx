import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Axios from 'axios';
import ProductListing from './ProductListing.jsx';
import styled from 'styled-components';
import ProductDetail from './ProductDetail.jsx';

const Container = styled.div`
	padding-top: 70px;
	display: flex;
	flex-wrap: wrap;
	background-color: #fbfbfb;
`;

export default class Mainpage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productDetailPage: false,
			productData: [],
			individualData: null
		};
		this.productPageFetch = this.productPageFetch.bind(this);
		this.returnToMain = this.returnToMain.bind(this);
	}

	componentDidMount() {
		Axios.get('/products')
			.then((result) => {
				const { data } = result;
				this.setState({ productData: data }, () => {});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	productPageFetch(individualData) {
		this.setState({ productDetailPage: true, individualData });
	}

	returnToMain(e) {
		e.preventDefault();
		this.setState({ productDetailPage: false });
	}

	render() {
		let page;
		page = this.state.productDetailPage ? (
			<ProductDetail data={this.state.individualData} />
		) : (
			<Container>
				{this.state.productData.map((item, index) => (
					<ProductListing
						productPageFetch={this.productPageFetch}
						key={index}
						data={item}
					></ProductListing>
				))}
			</Container>
		);
		return (
			<div>
				<Navbar
					returnToMain = {this.returnToMain}
					productDetailPage={this.state.productDetailPage}
					username={this.props.username}
				/>
				{page}
			</div>
		);
	}
}
