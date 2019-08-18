import React, { useEffect } from "react";

import "./CardCity.css";
import AccordionDescription from "../../components/accordion-description/AccordionDescription";
import dataApiService from "../../api/data-api-service";

const CardCity = props => {
	return (
		<div className="card">
			<div className="city-place-pollution">
				<h6>#1</h6>
				<h3>Paris</h3>
				<h5>Pollution [CO]: 500uC</h5>
			</div>

			<div className="accordion">
				<AccordionDescription />
			</div>
		</div>
	);
};

export default CardCity;
