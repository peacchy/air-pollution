import React, { useEffect, useState } from "react";

import countriesData from "../../data/countries.json";
import pollutionTypes from "../../data/pollutionTypes.json";
import "./InputAutocomplete.css";

const InputAutocomplete = props => {
	const [suggestions, setSuggestions] = useState([]);
	const [countryName, setCountryName] = useState("");
	const [pollutionType, setPollutionType] = useState("co");

	useEffect(() => {
		setCountryName(localStorage.getItem("countryName") || "");
		setPollutionType(localStorage.getItem("pollutionType") || "co");
	}, []);

	useEffect(() => {
		if (!countryName) {
			setSuggestions([]);
		} else {
			const result = countriesData.filter(p =>
				p.name.toLowerCase().includes(countryName.toLowerCase())
			);
			setSuggestions(result);
		}

		localStorage.setItem("countryName", countryName);
		localStorage.setItem("pollutionType", pollutionType);
	}, [countryName, pollutionType]);

	return (
		<div className="search">
			<div className="autocomplete">
				<input
					className="userInputSearch"
					list="autocomplete-list"
					type="text"
					value={countryName}
					placeholder="Country"
					onChange={event => setCountryName(event.target.value)}
				/>
				<datalist className="autocomplete-list" id="autocomplete-list">
					{suggestions.length > 0 &&
						suggestions.map((country, index) => {
							return (
								<option
									className="autocomplete-list-element"
									key={index}
									onClick={() => {
										setCountryName(country.name);
									}}
									value={
										country.name.charAt(0).toUpperCase() +
										country.name.slice(1)
									}
								>
									{country.name.charAt(0).toUpperCase() +
										country.name.slice(1)}
								</option>
							);
						})}
				</datalist>
			</div>

			<select
				className="dropdown"
				onChange={event => setPollutionType(event.target.value)}
				required={true}
				value={pollutionType}
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
