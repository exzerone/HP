import React, { Component } from 'react';
import styled from 'styled-components';

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
	width: 100%;
	height: 50%;
`;

const Title = styled.a`
	font-family: lato;
	font-size: 20px;
	margin-top: 20px;
	margin-bottom: 20px;
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
	}

	render() {
		return (
			<Product>
				<Image src={this.props.data.media[0].sizes[3].url} alt="" />
				<Information>
					<Title>{this.props.data.title}</Title>
					<Price>${this.props.data.price}</Price>
					<Date>{this.props.data.created_at}</Date>
				</Information>
			</Product>
		);
	}
}
