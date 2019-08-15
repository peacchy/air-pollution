import React, { useEffect, useState } from "react";

import "./InputAutocomplete.css";

const InputAutocomplete = props => {
	const [suggestions, setSuggestions] = useState([]);
	const [inputFocus, setInputFocus] = useState(false);
	const test = ["France", "Spain", "Poland", "Germany"];

	useEffect(() => {
		const result = test.filter(p => 
			p.toLowerCase().includes(props.value)
		);

		setSuggestions(result);
	}, [props.value]);

	return (
		<div>
			<div>
				<input
					type="text"
					value={props.value}
					placeholder="e.g. France"
					onChange={event => props.onChange(event.target.value)}
					onFocus={() => setInputFocus(true)}
					onBlur={() => setInputFocus(false)}
				/>
			</div>
            {inputFocus &&
				suggestions.map((key,index) => {
					return <div key={index}>{key}</div>;
				})}
		</div>
	);
};

export default InputAutocomplete;
