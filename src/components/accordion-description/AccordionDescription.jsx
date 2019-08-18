import React, { useState } from "react";

import "./AccordionDescription.css";

const AccordionDescription = () => {
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
				<p> text 1</p>
			</div>
		</div>
	);
};

export default AccordionDescription;
