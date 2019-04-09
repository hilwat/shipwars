import React from "react";

import YourBoard from "./YourBoard.js"
import Footer from "./Footer.js"
import YourHeader from "./YourHeader.js"
import YourShipSelector from "./YourShipSelector.js"
import './Gamepage.css';
import OppBoard from "./OppBoard.js";
import OppHeader from "./OppHeader.js"
import Chatboard from "./Chatboard.js"


const Gamepage = () => (

	<div>
		<nav className="game-board-nav"><a>SHIPWARS</a><a>?</a></nav>
		<div className="board-with-panel">
			<div className="left-panel">
				<YourHeader></YourHeader>
				<YourBoard></YourBoard>
				<YourShipSelector></YourShipSelector>
			</div> 
			<div className="middle-panel">
				<Chatboard></Chatboard>
			</div>
			<div className="right-panel">
				<OppHeader></OppHeader>
				<OppBoard></OppBoard>
			</div>
		</div>
	<div>
	<Footer></Footer>
	</div>
	</div>
)
export default Gamepage;