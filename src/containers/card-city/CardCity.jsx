import React, { useEffect, useState } from "react";

import "./CardCity.css";
import dataApiService from "../../api/data-api-service.js";
import AccordionDescription from "../../components/accordion-description/AccordionDescription";

const CardCity = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [description, setDescription] = useState("");

	useEffect(() => {
		setIsLoading(true);

		dataApiService
			.getCityDescription(props.cityData.city)
			.then(response => {
				return response.json();
			})
			.then(data => {
				const result = data.query.pages.find(
					p => p.title === props.cityData.city
				).extract;

				setDescription(result);
				setIsLoading(false);
			})
			.catch(error => {
				console.log(error);
				setIsLoading(false);
			});
	}, []);

	return (
		<div className="card">
			<div className="city-place-pollution">
				<h6>#{props.cityPlace}</h6>
				<h3>{props.cityData.city}</h3>
				<h5>
					Pollution [{props.cityData.pollutionType}]:{" "}
					{props.cityData.pollution} {props.cityData.unit}
				</h5>
			</div>

			<div className="accordion">
				<AccordionDescription description={description} />
			</div>
		</div>
	);
};

export default CardCity;
