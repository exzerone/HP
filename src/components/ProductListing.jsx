import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.a`
	font-family: lato;
	font-size: 20px;
	letter-spacing: 0.75px;
	text-transform: uppercase;
	color: #000;
	font-weight: 100;
`;

const Product = styled.div`
	display: flex;
	flex-direction: column;
	width: 360px;
	height: 715px;
	margin-top: 10px;
	margin-bottom: 10px;
	margin-left: 15px;
	margin-right: 15px;
`;

const Image = styled.img`
	width: 80%;
	height: 50%;
`;

export default class ProductListing extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Product>
				{/* <Image src={this.props.data.media[0].size[3].url}></Image> */}
				<Image src={this.props.data.media[0].sizes[3].url} alt="" />
				<div>
					<Title>{this.props.data.title}</Title>
					<div>{this.props.data.description}</div>
					<div>${this.props.data.price}</div>
					<div>{this.props.data.created_at}</div>
				</div>
			</Product>
		);
	}
}
