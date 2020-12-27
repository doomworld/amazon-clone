import React from 'react';
import { useStateValue } from '../store/StateProvider';
import './CheckoutProduct.css';

const CheckoutProduct = ({ title, id, image, price, rating }) => {
	const [, dispatch] = useStateValue();

	const removeFromCart = () => {
		// remove func.
		dispatch({
			type: 'REMOVE_FROM_CART',
			id: id,
		});
	};

	return (
		<div className="checkoutProduct">
			<img src={image} alt={title} />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>&#x2605;</p>
						))}
				</div>
				<button onClick={removeFromCart}>Remove from Cart</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
