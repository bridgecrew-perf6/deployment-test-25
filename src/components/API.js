import React from "react";
import axios from "axios";
import moment from "moment";

export default function API() {
	const now = moment().format().slice(0, 19);
	const [selection, setSelection] = React.useState({
		startLocation: "",
		startForecast: "",
		endLocation: "",
		endForecast: "",
	});
	const [results, setResults] = React.useState([selection]);
	const getAPI = async () => {
		const response = await axios.get(
			// "https://api.unsplash.com/photos/random?client_id=qmVaKW82sk_6DGdzL7kS_BNFDDGeIPoqfkqdfjQ3CiY&orientation=landscape&query=space"
			// `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=${now}`
			// "https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&q=HE12"
			"http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2",
			{
				headers: {
					AccountKey: "l3utmkQ1SKq2xOQ/+2DB3A==",
					accept: "application/json",
				},
			}
		);
		if (response.status === 200) {
			console.log(response);
			// console.log(response.data.items[0].forecasts);
			// setResults(response.data.items[0].forecasts);
		}
	};
	function handleChange(event) {
		console.log(event);
		console.log(event.target);
		setSelection((prevData) => {
			return {
				...prevData,
				[event.target.name]: event.target.value,
			};
		});
	}
	React.useEffect(() => {
		getAPI();
	}, []);

	return (
		<>
			<form>
				<select onChange={handleChange} name="startLocation">
					{results.map((result, index) => {
						return (
							<option
								key={index}
								id={index}
								value={result.area}
								name={result.area}
								forecast={result.forecast}
							>
								{result.area}
							</option>
						);
					})}
				</select>

				<select onChange={handleChange} name="endLocation">
					{results.map((result, index) => {
						return (
							<option
								key={index}
								id={index}
								value={result.area}
								name={result.area}
								forecast={result.forecast}
							>
								{result.area}
							</option>
						);
					})}
				</select>
			</form>
			{selection.startLocation} - {selection.startForecast}
			<br />
			{selection.endLocation} - {selection.endForecast}
		</>
	);
}
