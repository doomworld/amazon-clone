import React from 'react';
import './SearchBarDropDown.css';

const SearchBarDropDown = () => {
	return (
		<form className="dropdownMenu">
			<select name="dropdown">
				<option value="All" defaultValue>
					All Appliances
				</option>
				<option value="Sports">Sports</option>
				<option value="Electronics" required>
					Electronic Appliances
				</option>
				<option value="Clothings" disabled>
					Clothing Brands
				</option>
				<option value="Hardware">Hardware</option>
				<option value="Education">Education</option>
				<option value="Extra">Amazon Prime</option>
			</select>
		</form>
	);
};

export default SearchBarDropDown;
