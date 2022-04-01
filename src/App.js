import "./App.css";
import React from "react";
import PrayerTimes from "./components/PrayerTimes";
import Weather from "./components/Weather";
import Time from "./components/Time";
import Countdown from "./components/Countdown";
import Background from "./components/Background";

function App() {
	const [background, setBackground] = React.useState(
		"https://images.unsplash.com/photo-1529788295308-1eace6f67388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDQxNzN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDU1MzYxNDk&ixlib=rb-1.2.1&q=80&w=1080"
	);
	const bgImage = (url) => {
		setBackground(url);
	};
	document.body.style.backgroundImage = `url(${background})`;
	return (
		<>
			<div className="top">
				<Background getImg={bgImage} />
				<PrayerTimes />
				<Weather />
			</div>
			<div className="middle">
				<Time />
				{/* <Countdown /> */}
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
