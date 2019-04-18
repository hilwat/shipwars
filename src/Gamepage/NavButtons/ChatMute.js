import React, { Component } from "react";
import Chat from "./Chat.js"
import Mute from "./Mute.js"

class ChatMute extends Component {

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
					{this.state.playing? <Chat onPlayerClick={this.handlePlayerClick} /> : <Mute onPlayerClick={this.handlePlayerClick} />}
				</div>
			)
		}
	}
	
	export default ChatMute