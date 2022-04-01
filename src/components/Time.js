export default function Time() {
	const date = new Date();
	const time = date.toLocaleTimeString("en-us", {
		timeStyle: "short",
	});

	return (
		<h1 id="time" className="time">
			{time}
		</h1>
	);
}
