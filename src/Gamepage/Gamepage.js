import React from "react";

import YourBoard from "./YourBoard.js"
import Footer from "./Footer.js"
import YourHeader from "./YourHeader.js"
import YourShipSelector from "./YourShipSelector.js"
import './Gamepage.css';
import OppBoard from "./OppBoard.js";
import OppHeader from "./OppHeader.js"
import Chatboard from "./Chatboard.js"
import GameNav from "./GameNav.js"
import ShipLock from "./ShipSelectorLock.js"



const Gamepage = () => (

	<div>
		<GameNav></GameNav>
		<div className="board-with-panel">
			<div className="left-panel">
			 <div className="main-container">
			 <div className="fixer-container">
				<YourHeader></YourHeader>
				<YourBoard></YourBoard>
				<ShipLock></ShipLock>
				<YourShipSelector></YourShipSelector>
				</div>
				</div>
			</div> 
			<div className="middle-panel">
				<Chatboard></Chatboard>
			</div>
			<div className="right-panel">
			<div className="main-container">
			 <div className="fixer-container">
				<OppHeader></OppHeader>
				<OppBoard></OppBoard>
				</div>
				</div>
			</div>
		</div>
	</div>
)
export default Gamepage;