import React, { useState } from "react";

import "./AccordionDescription.css";

const AccordionDescription = props => {
	const [showActive, setShowActive] = useState(false);

	return (
		<div className="accordion">
			<button
				className="accordion-btn"
				onClick={() => setShowActive(!showActive)}
			>
				Description
			</button>
			<div className={showActive ? "active" : "hidden"}>
				<p>{props.description}</p>
			</div>
		</div>
	);
};

export default AccordionDescription;
