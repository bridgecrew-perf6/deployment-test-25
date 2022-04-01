import axios from "axios";

export default function Weather() {
	//get weather
	fetch(
		"https://api.weatherapi.com/v1/forecast.json?key=d17b5c48b8a5444fae6105410222202&q=singapore&days=1&aqi=no&alerts=no"
	)
		.then((res) => {
			if (!res.ok) {
				throw Error("Weather data not available");
			}
			return res.json();
		})
		.then((data) => {
			// console.log(data);
			const iconUrl = `http:${data.current.condition.icon}`;
			document.getElementById("weather").innerHTML = `
		        <img src=${iconUrl} />
		        <p class="weather-temp">${data.current.temp_c}º</p>
		        <p class="weather-city">${data.location.country}</p>
		    `;
		})
		.catch((err) => console.error(err));
	return <div id="weather"></div>;
}
