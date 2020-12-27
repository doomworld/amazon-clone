import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import './Header.css';
import SearchBarDropDown from './SearchBarDropDown';
import { useStateValue } from '../store/StateProvider';
import { auth } from '../config/firebase';

const Header = () => {
	const [{ cart, user }] = useStateValue();

	const logout = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<nav className="header">
			<Link to="/">
				<img className="header__logo" src={logo} alt="amazon logo" />
			</Link>
			{/* amazon logo on the left */}
			<div className="header__location">
				<LocationOnOutlinedIcon />
				<div className="header__locationTexts">
					<p>Deliver to</p>
					<h4>India</h4>
				</div>
			</div>
			{/* location of your country */}
			<div className="header__searchBar">
				<SearchBarDropDown />
				<input type="text" className="header__searchInput" />
				{/* <button> */}
				<SearchRoundedIcon className="header__searchIcon" fontSize="large" />
				{/* </button> */}
			</div>
			{/* search bar */}
			<div className="headerNav">
				<Link to="/">
					<div className="headerNav__lang">
						<LanguageRoundedIcon />
						<ArrowDropDownRoundedIcon />
					</div>
				</Link>
				<Link to={!user ? '/login' : '/'} className="headerNav__account">
					<div className="headerNav__signin">
						<span>Hello, {user ? user.email : 'User'}</span>
						<p>
							Account <span>&#x26; </span>Lists
						</p>

						{user ? <span onClick={logout}>Log Out</span> : <span>Log In</span>}
					</div>
					<ArrowDropDownRoundedIcon />
				</Link>
				{/* first link */}

				<Link to="/" className="headerNav__orders">
					<span>Returns </span>
					<p>
						<span>&#x26; Orders</span>
					</p>
				</Link>
				{/* second link */}

				<Link to="/prime" className="headerNav__prime">
					<span>Your</span>
					<p>Prime</p>
				</Link>
				{/* third link link */}

				<Link to={user ? '/checkout' : '/login'} className="headerNav__cart">
					<div>
						<ShoppingCartRoundedIcon />
						<span>{cart?.length}</span>
					</div>
					<p>Cart</p>
				</Link>
				{/* basket with counter */}
			</div>
			{/*  three links to site*/}
		</nav>
	);
};

export default Header;
