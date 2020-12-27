export const initialState = {
	cart: [],
	user: null,
};

// total amount of cart
export const getCartTotal = (cart) =>
	cart?.reduce((amount, item) => item.price + amount, 0);

/* reducer function takes an current state
and action to done on that state */
function reducer(state, action) {
	// console.log(action);

	switch (action.type) {
		case 'ADD_TO_CART':
			// code for add item to cart
			return {
				...state,
				cart: [...state.cart, action.item],
			};

		case 'REMOVE_FROM_CART':
			// logic for remove item from cart
			let newCart = [...state.cart];
			const index = state.cart.findIndex(
				(cartItem) => cartItem.id === action.id
			);
			if (index >= 0) {
				newCart.splice(index, 1);
				// item exists and remove it...
			} else {
				console.warn(
					`Can't remove product (id: ${action.id}) as it's not exist in cart`
				);
			}
			return { ...state, cart: newCart };

		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};

		default:
			// this is default
			return state;
	}
}

export default reducer;
