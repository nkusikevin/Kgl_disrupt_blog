import React from "react";
import "../assets/css/loader.css";
function Loader() {
	return (
		<>
			<div class='loading'>
				<div class='loading-bar'></div>
				<div class='loading-bar'></div>
				<div class='loading-bar'></div>
				<div class='loading-bar'></div>
			</div>
		</>
	);
}

export default Loader;
