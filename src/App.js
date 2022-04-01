import "./App.css";

function App() {
	const dLink = document.getElementById("downloadLink");
	//get background from unsplash
	fetch(
		"https://api.unsplash.com/photos/random?client_id=qmVaKW82sk_6DGdzL7kS_BNFDDGeIPoqfkqdfjQ3CiY&orientation=landscape&query=space"
	)
		.then((res) => res.json())
		.then((data) => {
			// console.log(data);
			dLink.href = data.urls.full;
			document.body.style.backgroundImage = `url(${data.urls.full})`;
		})
		.catch((err) => {
			// Use a default background image
			document.body.style.backgroundImage = `
        url("https://images.unsplash.com/photo-1529788295308-1eace6f67388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDQxNzN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDU1MzYxNDk&ixlib=rb-1.2.1&q=80&w=1080")`;
		});

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

	function getCurrentTime() {
		const date = new Date();
		document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {
			timeStyle: "short",
		});
	}

	function ramadanCountdown() {
		// Set the date we're counting down to
		const countDownDate = new Date("Apr 3, 2022 00:00:00").getTime();
		// console.log(countDownDate);
		// Update the count down every 1 second
		const x = setInterval(function () {
			// Get today's date and time
			const now = new Date().getTime();
			// console.log(now);
			// Find the distance between now and the count down date
			const distance = countDownDate - now;
			// console.log(distance);
			// Time calculations for days, hours, minutes and seconds
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			// const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			// const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			// const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Display the result in the element with id="demo"
			document.getElementById("countdown").innerHTML = days + " days to Ramadan";
			// days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

			// If the count down is finished, write some text
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("countdown").innerHTML = "Allahumma Taqabbal Minna";
			}
		}, 1000);
	}

	setInterval(getCurrentTime, 1000);
	ramadanCountdown();
	return (
		<>
			<div className="top">
				<div id="azan"></div>
				<div id="weather"></div>
			</div>
			<div className="middle">
				<h1 id="time" className="time"></h1>
				<h2 id="countdown" className="countdown"></h2>
			</div>

			<p id="download">
				<a id="downloadLink" className="downloadLink">
					download
				</a>
			</p>
		</>
	);
}

export default App;
