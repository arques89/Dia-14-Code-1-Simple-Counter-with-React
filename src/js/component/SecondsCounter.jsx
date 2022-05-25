import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

export const SecondsCounter = (props) => {
	return (
		<div>
			Tiempo hasta vacaciones:
			<div className="recuadro">
				<div className="cuatro">{props.cuarto % 10}</div>
			</div>
			<div className="recuadro">
				<div className="tres">{props.tercero % 10}</div>
			</div>
			<div className="recuadro">
				<div className="dos">{props.segundo % 10}</div>
			</div>
			<div className="recuadro">
				<div className="uno">{props.primero % 10}</div>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	primero: propTypes.number,
	segundo: propTypes.number,
	tercero: propTypes.number,
	cuarto: propTypes.number,
};

let count = 3600;
setInterval(function () {
	let cua = Math.floor(count / 1000);
	let ter = Math.floor(count / 100);
	let seg = Math.floor(count / 10);
	let pri = Math.floor(count / 1);
	console.log(cua % 10, ter % 10, seg % 10, pri % 10);
	count--;
	ReactDOM.render(
		<SecondsCounter
			primero={pri}
			segundo={seg}
			tercero={ter}
			cuarto={cua}
		/>,
		document.querySelector("#app")
	);
}, 1000);
