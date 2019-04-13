import React from "react";
import './GameNav.css';

const GameNav = () => (
	<nav className="game-board-nav">
	  <div className="game-logo">
		<a>SHIPWARS</a>
		</div> 
		<div className="nav-selector">
			<a><button className="btn-nav"></button></a>
			<a><button className="btn-nav questions">?</button></a>
		</div>
	</nav>
) 
export default GameNav;