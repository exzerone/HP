import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.ul`
	position: relative;
	display: flex;
	justify-content: center;
	list-style-type: none;
	li {
		margin-left: 0.5%;
		margin-right: 0.5%;
		font-size: 1em;
	}
`;

export default class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: this.props.currentPage,
			totalPage: this.props.data.length / this.props.itemPerPage
		};
		this.handleClick = this.handleClick.bind(this);
		this.renderPage = this.renderPage.bind(this);
	}

	renderPage() {
		let pages = [];
		for (let i = 1; i <= this.props.totalItem / this.props.itemPerPage; i++) {
			pages.push(
				<li key={i} onClick={this.handleClick}>
					<a id={i}>{i}</a>
				</li>
			);
		}
		return pages;
	}

	handleClick(e) {
		let currentPage = this.state.currentPage;
		currentPage =
			e.target.id === 'nextButton' ? currentPage + 1 : currentPage - 1;
		if (Number(e.target.id) !== NaN) {
			currentPage = Number(e.target.id);
		}
		this.props.changePage(currentPage);
	}

	render() {
		return (
			<Container>
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
