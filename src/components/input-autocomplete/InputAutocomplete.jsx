import React, { useEffect, useState } from "react";

import "./InputAutocomplete.css";

const InputAutocomplete = props => {
	const [suggestions, setSuggestions] = useState([]);
	const [inputFocus, setInputFocus] = useState(false);
	const country = ["France", "Spain", "Poland", "Germany"];
	const pollutionType = ["CO", "SO2", "NO2", "O3", "PM10", "PM2.5"];

	useEffect(() => {
		const result = country.filter(p =>
			p.toLowerCase().includes(props.value.toLowerCase())
		);

		setSuggestions(result);
	}, [props.value]);

	return (
		<div className="search">
			<div className="autocomplete">
				<input
					className="userInputSearch"
					type="text"
					value={props.value}
					placeholder="Country"
					onChange={event => props.onChange(event.target.value)}
					onFocus={() => setInputFocus(true)}
					onBlur={() => setInputFocus(false)}
				/>
				<ul className="autocomplete-list">
					{inputFocus &&
						suggestions.map((key, index) => {
							return (
								<li
									className="autocomplete-list-element"
									key={index}
								>
									{key}
								</li>
							);
						})}
				</ul>
			</div>
			<select className="dropdown">
				{pollutionType.map((key, index) => {
					return (
						<option className="dropdown-item" key={index}>
							{key}
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
