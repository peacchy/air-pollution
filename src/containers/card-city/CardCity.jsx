import React, { useEffect } from "react";

import "./CardCity.css";
import AccordionDescription from "../../components/accordion-description/AccordionDescription";
import dataApiService from "../../api/data-api-service";


const CardCity = () => {

	useEffect(() => {
        dataApiService.getCitiesData("FR", "co");
        dataApiService.getCityDescription("Paris");
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
