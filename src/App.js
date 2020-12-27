import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Checkout from './components/Checkout';
import Home from './components/Home';
import Login from './components/Login';
import { useStateValue } from './store/StateProvider';
import { auth } from './config/firebase';
import './App.css';
import SignUp from './components/SignUp';

function App() {
	const [, dispatch] = useStateValue();

	// is a piece of code run on certain condition
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// the user is logged in
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
		return () => {
			// any cleanup goes here
			unsubscribe();
		};
	}, [dispatch]);

	// console.log('USER DATA >>>>>', user);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/signup">
						<SignUp />
					</Route>
					<Route path="/prime">
						<Header />
						<h1>this is your prime page</h1>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
