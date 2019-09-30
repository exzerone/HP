import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';

const Product = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	width: 270px;
	height: 510px;
	margin-top: 10px;
	margin-bottom: 10px;
	margin-left: 15px;
	margin-right: 15px;
`;

const Information = styled.div`
	display: flex;
	padding: auto;
	text-align: left;
	flex-direction: column;
	justify-content: space-evenly;
	font-family: lato;
	letter-spacing: 0.75px;
	text-transform: uppercase;
	color: #000;
	font-weight: 100;
`;

const Image = styled.img`
	cursor: pointer;
	width: 100%;
	height: 50%;
	&:hover {
		background-color: lightgrey;
	}
`;

const Title = styled.a`
	cursor: pointer;
	font-family: lato;
	font-size: 20px;
	margin-top: 20px;
	margin-bottom: 20px;
	&:hover {
		text-decoration: underline;
	}
`;

const Price = styled.div`
	margin-top: 50px;
	margin-bottom: 10px;
	font-size: 25px;
	font-weight: bold;
`;

const Date = styled.div`
	margin-top: 15px;
	font-size: 10px;
`;

export default class ProductListing extends Component {
	constructor(props) {
		super(props);
		this.productDetailPageFetch = this.productDetailPageFetch.bind(this);
	}

	productDetailPageFetch(e) {
		e.preventDefault();
		this.props.productPageFetch(this.props.data);
	}

	render() {
		return (
			<Product>
				<Carousel dragging={true}>
					{this.props.data.media.map((photos, index) => (
						<Image
							key = {index}
							onClick={this.productDetailPageFetch}
							src={photos.sizes[3].url}
						/>
					))}
				</Carousel>
				<Information>
					<Title onClick={this.productDetailPageFetch}>
						{this.props.data.title}
					</Title>
					<Price>${this.props.data.price}</Price>
					<Date>Posted at: {this.props.data.created_at}</Date>
				</Information>
			</Product>
		);
	}
}
