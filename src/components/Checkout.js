import React from 'react';
import { useStateValue } from '../store/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import './Checkout.css';

const Checkout = () => {
	const [{ cart }] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					src="https://image.shutterstock.com/z/stock-vector-banner-merry-christmas-and-happy-new-year-realistic-gift-boxes-shiny-golden-confetti-festive-1548289511.jpg"
					alt="banner ad"
					className="checkout__ad"
				/>
				{cart?.length === 0 ? (
					<div className="checkout__title">
						<h2>Your Shoping Cart is empty </h2>
						<p>
							You have no item in your Cart. To buy one or more items, click
							"Add to Cart" next to the item.
						</p>
					</div>
				) : (
					<div className="checkout__products">
						<h1 className="checkout__title">This is your shopping Cart</h1>
						{cart?.map((item) => (
							<CheckoutProduct
								key={item.id}
								id={item.id}
								title={item.title}
								price={item.price}
								rating={item.rating}
								image={item.image}
							/>
						))}
						{/* list out all of the checkout products */}
					</div>
				)}
			</div>
			{cart.length > 0 && (
				<div className="checkout__right">
					<Subtotal />
				</div>
			)}
		</div>
	);
};

export default Checkout;
