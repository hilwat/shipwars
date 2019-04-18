import React from "react";
import './GameNav.css';
import PausePlay from "./MenuButtons/PausePlay.js"

	
// }

const GameNav = () => (
	<nav className="game-board-nav">
	  <a href="#default" className="game-logo">SHIPWARS</a>
		<div className="nav-selector">
			<button className="questionbtn"></button>
			<button className="chatbtn"></button>
			<button className="volumebtn"></button>
			<button className="pausebtn"></button>
			<PausePlay></PausePlay>
		</div>
	</nav>
) 
export default GameNav;