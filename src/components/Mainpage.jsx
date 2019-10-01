import React, { Component } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import Navbar from './Navbar.jsx';
import ProductListing from './ProductListing.jsx';
import ProductDetail from './ProductDetail.jsx';
import Pagination from './Pagination.jsx';
import Sort from './Sort.jsx';
import _ from 'lodash';

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #fbfbfb;
`;

const ProductsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const SortContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	height: 70px;
	width: 100%;
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
			totalCount: 0,
			defaultSort: 'low_price',
			userList: []
		};
		this.productPageFetch = this.productPageFetch.bind(this);
		this.returnToMain = this.returnToMain.bind(this);
		this.renderItemsPerPage = this.renderItemsPerPage.bind(this);
		this.changePage = this.changePage.bind(this);
		this.sortProducts = this.sortProducts.bind(this);
	}

	componentDidMount() {
		Axios.all([Axios.get('/products'), Axios.get('/userList')])
			.then(
				Axios.spread((products, userList) => {
					console.log(userList.data);
					this.setState(
						{
							totalItem: products.data,
							totalCount: products.data.length,
							userList: userList.data
						},
						this.sortProducts(products.data, this.state.defaultSort)
					);
				})
			)
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
		//limit 20 items per page
		let productData = data.slice(
			(this.state.currentPage - 1) * 10,
			(this.state.currentPage - 1) * 10 + 10
		);
		this.setState({ productData });
	}

	sortProducts(data = this.state.totalItem, sorting) {
		let result;
		if (sorting === 'high_price') {
			result = data.sort((a, b) => b['price'] - a['price']);
		} else if (sorting === 'low_price') {
			result = data.sort((a, b) => a['price'] - b['price']);
		} else if (sorting === 'seller') {
			result = data.sort((a, b) => {
				if (a['seller']['first_name'] < b['seller']['first_name']) {
					return -1;
				}
			});
			console.log(result);
		} else if (sorting === 'title') {
			result = data.sort((a, b) => {
				if (a['title'] < b['title']) {
					return -1;
				}
			});
			console.log(result);
		} else {
			result = data.sort((a, b) => a[sorting] - b[sorting]);
		}
		this.renderItemsPerPage(result);
	}

	render() {
		let page;
		page = this.state.productDetailPage ? (
			<ProductDetail data={this.state.individualData} />
		) : (
			<MainContainer>
				<SortContainer>
					<Sort
						sortProducts={this.sortProducts}
						renderItemsPerPage={this.renderItemsPerPage}
					/>
				</SortContainer>
				<ProductsContainer>
					{this.state.productData.map((item, index) => (
						<ProductListing
							productPageFetch={this.productPageFetch}
							key={index}
							data={item}
						/>
					))}
				</ProductsContainer>
			</MainContainer>
		);
		return (
			<div>
				<Navbar
					userList={this.state.userList}
					returnToMain={this.returnToMain}
					productDetailPage={this.state.productDetailPage}
					username={this.props.username}
				/>
				{page}
				<Pagination
					currentPage={this.state.currentPage}
					changePage={this.changePage}
					data={this.state.productData}
					totalPage={this.state.totalCount / 10}
					productDetail={this.state.productDetailPage}
				/>
			</div>
		);
	}
}
