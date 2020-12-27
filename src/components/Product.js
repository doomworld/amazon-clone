import React from 'react';
import { useStateValue } from '../store/StateProvider';
import { useHistory } from 'react-router-dom';
import './Product.css';

const Product = ({ id, title, price, rating, image }) => {
	const [{ user }, dispatch] = useStateValue();
	const history = useHistory();

	const addToCart = () => {
		// add item to cart
		if (user) {
			dispatch({
				type: 'ADD_TO_CART',
				item: {
					id,
					title,
					price,
					rating,
					image,
				},
			});
		} else {
			history.push('/login');
		}
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small> <strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>&#x2605;</p>
						))}
				</div>
			</div>
			<img className="product__image" src={image} alt="" />
			<button onClick={addToCart}>Add to Cart</button>
		</div>
	);
};

export default Product;
