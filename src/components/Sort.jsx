import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
`;

const Dropdown = styled.select`
	position: absolute;
	font-size: 12px;
	top: 79.5px;
	left: 100px;
`;

const Prompt = styled.div`
	float: left;
	width: 95px;
	text-align: center;
	align-self: center;
	vertical-align: center;
	flex-flow: row;
	margin-left: 20%;
	font-family: lato;
	font-size: 20px;
	font-weight: normal;
	padding: auto;
`;

export default class Sort extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.sorting = this.sorting.bind(this);
	}

	sorting(e) {
		this.props.sortProducts(undefined, e.target.value);
	}

	render() {
		return (
			<Container>
				<Prompt>sort by </Prompt>
				<Dropdown onChange={this.sorting}>
					<option value="low_price">Lowest Price</option>
					<option value="high_price">Highest Price</option>
					<option value="clicks">Clicks</option>
					<option value="product_id">Product ID</option>
					<option value="seller">Seller</option>
					<option value="title">Name A_Z</option>
					<option value="category">Category#</option>
				</Dropdown>
			</Container>
		);
	}
}
