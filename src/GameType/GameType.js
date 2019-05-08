import React from "react";

import './GameType.css';
import FriendSVG from "./TypeSVG/FriendSVG.js";
import RandomSVG from "./TypeSVG/RandomSVG.js";
import ComputerSVG from "./TypeSVG/ComputerSVG.js";

import SmallLogo from "../Overview/ShipSVG/SmallLogo.js";




const GameType = (props) => (

	<div>
		<div className="board-with-panel">
		<div className="main-container">
			 <div className="fixer-container">
				<SmallLogo></SmallLogo>
				<h1>PLAY AGAINST:</h1> 
				<div onClick={props.friendClick}>
				  <FriendSVG/>
				</div>
				<div onClick={props.nonfriendClick}>
					<RandomSVG></RandomSVG>
				</div>
				<div onClick={props.nonfriendClick}>
					<ComputerSVG></ComputerSVG>
				</div>
		</div>
		</div>
		</div>
	</div>
)
export default GameType;