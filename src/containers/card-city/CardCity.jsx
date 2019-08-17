import React, { useEffect } from "react";

import "./CardCity.css";
import AccordionDescription from "../../components/accordion-description/AccordionDescription";
import dataApiService from "../../api/data-api-service";

const CardCity = props => {
	useEffect(() => {
		const cityData = dataApiService.getCitiesData(
			props.countryName,
			props.pollutionType
		);
	}, []);

	return (
		<div className="card">
			<div>
				<AccordionDescription />
			</div>
		</div>
	);
};

export default CardCity;
