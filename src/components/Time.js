import React from "react";
export default function Time() {
	const date = new Date();
	const [time, setTime] = React.useState("");

	React.useEffect(() => {
		const interval = setInterval(() => {
			displayTime();
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [time]);

	function displayTime() {
		setTime(
			date.toLocaleTimeString("en-us", {
				timeStyle: "short",
			})
		);
	}

	return (
		<h1 id="time" className="time">
			{time}
		</h1>
	);
}
