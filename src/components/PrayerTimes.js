import axios from "axios";

export default function PrayerTimes() {
	//get prayer times
	fetch("https://api.pray.zone/v2/times/today.json?city=singapore&school=10")
		.then((res) => {
			if (!res.ok) {
				throw Error("Something went wrong");
			}
			return res.json();
		})
		.then((data) => {
			// console.log(data);
			let prayerTimes = data.results.datetime[0].times;
			const { Asr, Dhuhr, Fajr, Imsak, Isha, Maghrib, Midnight, Sunrise, Sunset } = prayerTimes;
			// document.getElementById("azan-top").innerHTML = `🕋 <span>Prayer Times</span>`;
			document.getElementById("azan").innerHTML = `
		            Fajr: ${Fajr}<br>
		            Dhuhr: ${Dhuhr}<br>
		            Asar: ${Asr}<br>
					Maghrib: ${Maghrib}<br>
					Isha: ${Isha}
		        `;
		})
		.catch((err) => console.error(err));
	return <div id="azan"></div>;
}
