import React, { useEffect, useState } from "react";

import "./InputAutocomplete.css";

const InputAutocomplete = props => {
	const [suggestions, setSuggestions] = useState([]);
	const [inputFocus, setInputFocus] = useState(false);
	const test = ["France", "Spain", "Poland", "Germany"];

	useEffect(() => {
		const result = test.filter(p =>
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
			<div className="btn">
				<button className="btn-search">Search</button>
			</div>
		</div>
	);
};

export default InputAutocomplete;
