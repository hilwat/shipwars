import React from "react";

import YourBoard from "./YourBoard.js"
import Footer from "./Footer.js"
import YourHeader from "./YourHeader.js"
import ShipSelector from "./ShipSelector.js"
import './Gamepage.css';


const Gamepage = () => (

	<div>
		<nav> hi I'm the gamepage </nav>
		<div className="board-with-panel">
			<div className="left-panel">
				<YourHeader></YourHeader>
				<YourBoard></YourBoard>
				<ShipSelector></ShipSelector>
			</div> 
			<div className="middle-panel">
				<p> this is the chatbot section</p>
			</div>
			<div className="right-panel">
				<p>this is the opponents board</p>
			</div>
		</div>
	<div>
	<Footer></Footer>
	</div>
	</div>
)
export default Gamepage;