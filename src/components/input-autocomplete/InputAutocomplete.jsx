import React, { useEffect, useState } from "react";

import countriesData from "../../data/countries.json";
import pollutionTypes from "../../data/pollutionTypes.json";
import "./InputAutocomplete.css";

const InputAutocomplete = props => {
	const [suggestions, setSuggestions] = useState([]);
	const [isCountryChosen, setIsCountryChosen] = useState(true);
	const [countryName, setCountryName] = useState("");
	const [pollutionType, setPollutionType] = useState("co");

	useEffect(() => {
		if (countryName === "") {
			setSuggestions([]);
		} else {
			const result = countriesData.filter(p =>
				p.name.toLowerCase().includes(countryName.toLowerCase())
			);
			setSuggestions(result);
		}
	}, [countryName]);

	return (
		<div className="search">
			<div className="autocomplete">
				<input
					className="userInputSearch"
					type="text"
					value={countryName}
					placeholder="Country"
					onChange={event => setCountryName(event.target.value)}
					onFocus={() => setIsCountryChosen(false)}
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
										setCountryName(country.name);
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
				onChange={event => setPollutionType(event.target.value)}
				required={true}
			>
				{pollutionTypes.map((type, index) => {
					return (
						<option
							className="dropdown-item"
							key={index}
							value={type.name.toLowerCase()}
						>
							{type.name}
						</option>
					);
				})}
			</select>
			<div className="btn">
				<button
					className="btn-search"
					onClick={() =>
						props.getCitiesData(countryName, pollutionType)
					}
				>
					Search
				</button>
			</div>
		</div>
	);
};

export default InputAutocomplete;
