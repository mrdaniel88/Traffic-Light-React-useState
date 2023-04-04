import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("")

	return (

			<div className="semaforo">
				<div className="luces">
					<div onClick={()=>setColor("red")} className={`${color == "red" ? "glow" : ""} red`}>						
					</div>
					<div onClick={()=>setColor("yellow")} className={`${color == "yellow" ? "glow" : ""} yellow`}>
					</div>
					<div onClick={()=>setColor("green")} className={`${color == "green" ? "glow" : ""} green`}>
					</div>
				</div>
			</div>

	);
};

export default Home;
