import React from "react";
import axios from "axios";

export default function API() {
	React.useEffect(() => {
		const getAPI = async () => {
			const response = await axios.get(
				"https://api.unsplash.com/photos/random?client_id=qmVaKW82sk_6DGdzL7kS_BNFDDGeIPoqfkqdfjQ3CiY&orientation=landscape&query=space"
			);
			if (response.status === 200) {
				console.log(response);
			}
		};
		getAPI();
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
