import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';

const ProductContainer = styled.div`
	display: flex;
	margin: auto;
	background-color: #ececec;
	width: 100%;
	height: 100%;
`;

const PhotoContainer = styled.div`
	width: 30%;
	height: 40%;
	padding: 20px 20px 20px 20px;
	margin-left: 10%;
`;

const Information = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: space-around;
	width: 40%;
	height: 70%;
	font-family: lato;
	margin-left: 2%;
	font-weight: lighter;
`;
const Title = styled.h1`
	font-weight: lighter;
	margin-bottom: 0;
`;

const Price = styled.div`
	color: #d7410b;
	font-weight: 100;
	font-size: 23px;
	margin-top: 5%;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;
const ProductID = styled.div`
	font-size: 15px;
	font-weight: bold;
	margin-bottom: 12%;
`;

const Stock = styled.div`
	margin-top: 12%;
	color: #822980;
`;

const Desc = styled.div`
	word-wrap: break-word;
	color: black;
	font-size: 20px;
	font-weight: normal;
	p {
		font-weight: lighter;
		font-size: 15px;
	}
`;

const Seller = styled.div`
	margin-top: 10%;
	font-size: 20px;
`;

const Review = styled.div``;

export default class ProductDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ProductContainer className="productContainer">
				<PhotoContainer>
					<Carousel dragging={true}>
						{this.props.data.media.map((photos, index) => (
							<img
								key={index}
								onClick={this.productDetailPageFetch}
								src={photos.sizes[3].url}
							/>
						))}
					</Carousel>
				</PhotoContainer>
				<Information>
					<Title>{this.props.data.title}</Title>
					<ProductID>Product ID: {this.props.data.product_id}</ProductID>
					<Review>
						{!this.props.data.review_count ? `This Item Has No Review` : this.props.data.review_count `Reviews`}
					</Review>
					<Desc>
						Description: <br></br>
						<p className="description">{this.props.data.description}</p>
					</Desc>
					<Stock>stock remaining: {this.props.data.stock}</Stock>
					<Price>
						{this.props.data.price_str}.00 {this.props.data.currency}
					</Price>
					<Seller>
						Seller: {this.props.data.seller.first_name}{' '}
						{this.props.data.seller.last_name}
					</Seller>
				</Information>
			</ProductContainer>
		);
	}
}
