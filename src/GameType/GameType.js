import React from "react";

import './GameType.css';
import FriendSVG from "./TypeSVG/FriendSVG.js";
import RandomSVG from "./TypeSVG/RandomSVG.js";
import ComputerSVG from "./TypeSVG/ComputerSVG.js";

import SmallLogo from "../Overview/ShipSVG/SmallLogo.js";

import {Link} from 'react-router-dom';



const GameType = () => (

	<div>
		<div className="board-with-panel">
		<div className="main-container">
			 <div className="fixer-container">
				<SmallLogo></SmallLogo>
				<h1>PLAY AGAINST:</h1> 
				<Link to='/overview'>		
					<FriendSVG></FriendSVG>
				</Link>
				<Link to='/overview'>		
					<RandomSVG></RandomSVG>
				</Link>
				<Link to='/overview'>		
					<ComputerSVG></ComputerSVG>
				</Link>
		</div>
		</div>
		</div>
	</div>
)
export default GameType;