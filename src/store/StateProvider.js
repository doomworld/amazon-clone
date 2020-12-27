// setup data layer
// we need this to track basket and user info for application
import React, { createContext, useContext, useReducer } from 'react';

// this is the data layer for application
export const StateContext = createContext();

// Build a provider for application to intract with data layer
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// this is how we use it inside a component
export const useStateValue = () => useContext(StateContext);
