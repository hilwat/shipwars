import React, { Component } from "react";
import Silence from "./Silence.js"
import Sound from "./Sound.js"

class SoundSilence extends Component {

	constructor(props) {
		super(props)
		this.state = {
			playing: false
		}
	}
	
	handlePlayerClick = () => {
		if (!this.state.playing) {
			this.setState({playing: true})
		} else {
			this.setState({playing: false})
		}
	}
	
		render() {
			return (
				<div className="player" >
					{this.state.playing? <Sound onPlayerClick={this.handlePlayerClick} /> : <Silence onPlayerClick={this.handlePlayerClick} />}
				</div>
			)
		}
	}
	
	export default SoundSilence