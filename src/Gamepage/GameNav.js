import React from "react";
import './GameNav.css';
import PausePlay from "./NavButtons/PausePlay.js"
import SoundSilence from "./NavButtons/SoundSilence.js"
import ChatMute from "./NavButtons/ChatMute.js";
import Question from "./NavButtons/Question.js";
import QuestionDropdown from "./NavButtons/QuestionDropdown";
	
// }

const GameNav = () => (
	<nav className="game-board-nav">
	  <a href="#default" className="game-logo">SHIPWARS</a>
		<div className="nav-selector">
			<PausePlay></PausePlay>
			<ChatMute></ChatMute>
			<SoundSilence></SoundSilence>
			<QuestionDropdown></QuestionDropdown>
		</div>
	</nav>
) 
export default GameNav;