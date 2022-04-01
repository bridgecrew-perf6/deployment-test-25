import React from "react";
export default function Countdown() {
	// If the count down is finished, write some text
	// 	if (distance < 0) {
	// 		clearInterval(x);
	// 		document.getElementById("countdown").innerHTML = "Allahumma Taqabbal Minna";
	// 	}
	// }, 1000);

	const [countdown, setCountdown] = React.useState("");
	const countDownDate = new Date("Apr 3, 2022 00:00:00").getTime();
	const now = new Date().getTime();
	const distance = countDownDate - now;
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	React.useEffect(() => {
		const interval = setInterval(() => {
			displayCountdown();
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [countdown]);

	function displayCountdown() {
		setCountdown(
			`${days} day(s) 
			${hours} hour(s) 
			${minutes} minute(s) and 
			${seconds} second(s) until Ramadan`
		);
	}

	return (
		<h2 id="countdown" className="countdown">
			{countdown}
		</h2>
	);
}
