import React from "react";
import axios from "axios";
export default function Background(props) {
	//get background from unsplash
	// fetch(
	// 	"https://api.unsplash.com/photos/random?client_id=qmVaKW82sk_6DGdzL7kS_BNFDDGeIPoqfkqdfjQ3CiY&orientation=landscape&query=space"
	// )
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		// console.log(data);
	// 		document.body.style.backgroundImage = `url(${data.urls.full})`;
	// 	})
	// 	.catch((err) => {
	// 		// Use a default background image
	// 		document.body.style.backgroundImage = `
	//     url("https://images.unsplash.com/photo-1529788295308-1eace6f67388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDQxNzN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDU1MzYxNDk&ixlib=rb-1.2.1&q=80&w=1080")`;
	// 	});
	React.useEffect(() => {
		const getBackground = async () => {
			const response = await axios.get(
				"https://api.unsplash.com/photos/random?client_id=qmVaKW82sk_6DGdzL7kS_BNFDDGeIPoqfkqdfjQ3CiY&orientation=landscape&query=space"
			);
			if (response.status === 200) {
				console.log(response.data.urls.full);
				props.getImg(response.data.urls.full);
			}
		};
		getBackground();
	}, []);

	// fetch(
	// 	"https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&q=HE12"
	// )
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		console.log(data);
	// 	});

	return <></>;
}
