import React, { useEffect, useState } from "react";

import countriesData from "../../data/countries.json";
import pollutionType from "../../data/pollutionTypes.json";
import "./InputAutocomplete.css";

const InputAutocomplete = props => {
	const [suggestions, setSuggestions] = useState([]);
	const [isCountryChosen, setIsCountryChosen] = useState(true);

	useEffect(() => {
		if (props.countryName === "") {
			setSuggestions([]);
		} else {
			const result = countriesData.filter(p =>
				p.name.toLowerCase().includes(props.countryName.toLowerCase())
			);
			setSuggestions(result);
		}
	}, [props.countryName]);

	return (
		<div className="search">
			<div className="autocomplete">
				<input
					className="userInputSearch"
					type="text"
					value={props.countryName}
					placeholder="Country"
					onChange={event => props.setCountryName(event.target.value)}
					onFocus={() => setIsCountryChosen(false)}
					//onBlur={() => setSuggestions([])}
				/>
				<ul className="autocomplete-list">
					{suggestions.length > 0 &&
						!isCountryChosen &&
						suggestions.map((country, index) => {
							return (
								<li
									className="autocomplete-list-element"
									key={index}
									onClick={() => {
										props.setCountryName(country.name);
										setIsCountryChosen(true);
									}}
								>
									{country.name}
								</li>
							);
						})}
				</ul>
			</div>
			<select
				className="dropdown"
				onChange={event => props.setPollutionType(event.target.value)}
			>
				{pollutionType.map((type, index) => {
					return (
						<option
							className="dropdown-item"
							key={index}
							value={type.name}
						>
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
