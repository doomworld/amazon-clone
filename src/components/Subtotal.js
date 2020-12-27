import React from 'react';
import { useStateValue } from '../store/StateProvider';
import './Subtotal.css';

const Subtotal = () => {
	const [{ cart }] = useStateValue();

	let total = 0;
	cart.map((item) => (total += parseFloat(item.price)));
	total = total.toString().slice(0, 6);

	return (
		<div className="subtotal">
			<p>
				Subtotal ({cart.length} items) : <strong>{` $${total}`}</strong>
			</p>
			<small className="subtotal__gift">
				<input type="checkbox" /> This order contains a gift
			</small>
			<button>Proceed to Checkout</button>
		</div>
	);
};

export default Subtotal;
