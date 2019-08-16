import React, { useState } from "react";

import "./AccordionDescription.css";

const AccordionDescription = () => {
	const [showActive, setShowActive] = useState(false);

	return (
		<div className="card">
			<button
				className="accordion"
				onClick={() => setShowActive(!showActive)}
			>
				1
			</button>
			<div className={showActive ? "active" : "hidden"}>
				<p> text 1</p>
			</div>
		</div>
	);
};

export default AccordionDescription;
