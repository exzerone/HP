import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';

const ProductContainer = styled.div`
	display: flex;
	flex-flow: column;
	height: 50%;
	width: 50%;
`;
const Image = styled.img``;

export default class ProductDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ProductContainer>
				<Carousel dragging={true}>
					{this.props.data.media.map((photos, index) => (
						<Image
							key={index}
							onClick={this.productDetailPageFetch}
							src={photos.sizes[3].url}
						/>
					))}
				</Carousel>
			</ProductContainer>
		);
	}
}
