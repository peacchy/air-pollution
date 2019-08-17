import React, { useEffect, useState } from "react";

import countriesData from "../../data/countries.json";
import pollutionType from "../../data/pollutionTypes.json";
import "./InputAutocomplete.css";

const InputAutocomplete = props => {
	const [suggestions, setSuggestions] = useState([]);
	const [inputFocus, setInputFocus] = useState(false);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		const result = countriesData.filter(p =>
			p.name.toLowerCase().includes(inputValue.toLowerCase())
		);
		setSuggestions(result);
	}, [inputValue]);

	return (
		<div className="search">
			<div className="autocomplete">
				<input
					className="userInputSearch"
					type="text"
					value={inputValue}
					placeholder="Country"
					onChange={event => setInputValue(event.target.value)}
					onFocus={() => setInputFocus(true)}
					onBlur={() => setInputFocus(false)}
				/>
				<ul className="autocomplete-list">
					{inputFocus &&
						suggestions.map((country, index) => {
							return (
								<li
									className="autocomplete-list-element"
									key={index}
									onClick={() => setInputValue(country.name)}
								>
									{country.name}
								</li>
							);
						})}
				</ul>
			</div>
			<select className="dropdown">
				{pollutionType.map((type, index) => {
					return (
						<option className="dropdown-item" key={index}>
							{type.name}
						</option>
					);
				})}
			</select>
			<div className="btn">
				<button className="btn-search">Search</button>
			</div>
		</div>
	);
};

export default InputAutocomplete;
