/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";

const Countries = () => {
	const [countriesList, setCountriesList] = useState([]);

	const fetchCountriesList = async () => {
		let response = await axios.get("https://restcountries.com/v3.1/all");

		console.log(response.data[0]);

		if (response.status === 200) {
			setCountriesList(response.data);
		}
	};

	useEffect(() => {
		fetchCountriesList();
	}, []);

	return (
		<>
			<section
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
				}}>
				{countriesList.map((item) => (
					<article
						key={item.ccn3}
						style={{
							width: "10rem",
							height: "10rem",
							border: "1px solid gray",
							margin: "0.3rem",
							borderRadius: "8px",
							boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
							display: "flex",
							flexDirection: "column",
							justifyContent: "between",
							alignItems: "center",
						}}>
						<img
							src={item.flags.png}
							alt={item.flags.alt}
							height={100}
							width={120}
							style={{
								width: "100%",
								borderRadius: "7px 7px 0 0 ",
							}}
						/>

						<article
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "end",
								width: "100%",
							}}>
							<p style={{ height: "30%" }}>{item.name.common}</p>
						</article>
					</article>
				))}
			</section>
		</>
	);
};

export default Countries;
