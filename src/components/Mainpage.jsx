import React, { Component } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import Navbar from './Navbar.jsx';
import ProductListing from './ProductListing.jsx';
import ProductDetail from './ProductDetail.jsx';
import Pagination from './Pagination.jsx';

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
			individualData: null,
			currentPage: 1,
			totalItem: null,
			totalCount: 0
		};
		this.productPageFetch = this.productPageFetch.bind(this);
		this.returnToMain = this.returnToMain.bind(this);
		this.renderItemsPerPage = this.renderItemsPerPage.bind(this);
		this.changePage = this.changePage.bind(this);
	}

	componentDidMount() {
		Axios.get('/products')
			.then((result) => {
				const { data } = result;
				this.setState(
					{ totalItem: data, totalCount: data.length },
					this.renderItemsPerPage(data)
				);
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

	changePage(currentPage) {
		this.setState({ currentPage }, () => {
			this.renderItemsPerPage(this.state.totalItem);
		});
	}

	renderItemsPerPage(data) {
		let productData = data.slice(
			(this.state.currentPage - 1) * 20,
			(this.state.currentPage - 1) * 20 + 20
		);
		this.setState({ productData });
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
					returnToMain={this.returnToMain}
					productDetailPage={this.state.productDetailPage}
					username={this.props.username}
				/>
				{page}
				<Pagination
					currentPage={this.state.currentPage}
					changePage={this.changePage}
					data={this.state.productData}
					totalItem={this.state.totalCount}
					totalPage={this.state.totalCount / 20}
				/>
			</div>
		);
	}
}
