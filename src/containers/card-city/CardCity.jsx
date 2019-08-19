import React, { useEffect, useState } from "react";

import "./CardCity.css";
import dataApiService from "../../api/data-api-service.js";
import AccordionDescription from "../../components/accordion-description/AccordionDescription";

const CardCity = props => {
	const [description, setDescription] = useState("");

	useEffect(() => {
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
			})
			.catch(error => {
				console.log(error);
			});
	}, [props.cityData.city]);

	return (
		<div className="card">
			<div>
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
		</div>
	);
};

export default CardCity;
