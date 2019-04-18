import React from "react";
import './GameNav.css';
import PausePlay from "./NavButtons/PausePlay.js"
import SoundSilence from "./NavButtons/SoundSilence.js"
import ChatMute from "./NavButtons/ChatMute.js";
import Question from "./NavButtons/Question.js";
	
// }

const GameNav = () => (
	<nav className="game-board-nav">
	  <a href="#default" className="game-logo">SHIPWARS</a>
		<div className="nav-selector">
			<PausePlay></PausePlay>
			<ChatMute></ChatMute>
			<SoundSilence></SoundSilence>
			<Question></Question>
		</div>
	</nav>
) 
export default GameNav;