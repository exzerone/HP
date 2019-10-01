import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.ul`
	visibility: ${(props) => (props.productDetail ? 'hidden' : 'visible')};
	position: relative;
	display: flex;
	justify-content: center;
	list-style-type: none;
	li {
		cursor: pointer;
		margin-left: 0.5%;
		margin-right: 0.5%;
		font-size: 20px;
		color: #999;
		&:hover {
			color: #333;
			text-decoration: underline;
		}
	}
`;

export default class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1
		};
		this.handleClick = this.handleClick.bind(this);
		this.renderPage = this.renderPage.bind(this);
	}

	renderPage() {
		let pages = [];
		for (let i = 1; i <= this.props.totalPage; i++) {
			pages.push(
				<li key={i} onClick={this.handleClick}>
					<a id={i}>{i}</a>
				</li>
			);
		}
		return pages;
	}

	handleClick(e) {
		e.preventDefault();
		let currentPage = this.state.currentPage;
		if (Number(e.target.id)) currentPage = Number(e.target.id);
		if (e.target.id === 'prevButton') {
			if (currentPage > 1) {
				currentPage--;
			}
		} else if (e.target.id === 'nextButton') {
			if (currentPage < this.props.totalPage) {
				currentPage++;
			}
		}
		this.setState({ currentPage }, this.props.changePage(currentPage));
	}

	render() {
		return (
			<Container productDetail={this.props.productDetail}>
				<li onClick={this.handleClick} id="prevButton">
					{'<'}
				</li>
				{this.renderPage()}
				<li onClick={this.handleClick} id="nextButton">
					{'>'}
				</li>
			</Container>
		);
	}
}
