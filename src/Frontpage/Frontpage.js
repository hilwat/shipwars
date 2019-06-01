import React from "react";


import FrontMenu from "./Frontmenu.js"
import Hero from "./Hero.js"
import DarkVideo from "../Images/battleship-dark.mp4"
import './Frontpage.css';
import { Switch, Route, Link } from 'react-router-dom';
import Overview from "../Overview/Overview.js";
import GameType from "../GameType/GameType.js";


class Frontpage extends React.Component {
	state={
		display: 1
	}
	componentDidMount(){
	}
	playClick = () => this.setState({display:2})
	friendClick = () => this.setState({display:3})
	nonfriendClick = () => this.setState({display:4})
		
  render() {
		return(
			<div>
				<div className="board-with-panel">
					<div className="left-panel">
						{this.state.display===1 && <FrontMenu playClick = {this.playClick}/>}
						{this.state.display===2 && <GameType friendClick = {this.friendClick} nonfriendClick = {this.nonfriendClick}/>}
						{this.state.display===3 && <Overview showFriend = {true} startGame = {this.props.startGame}/>}
						{this.state.display===4 && <Overview showFriend = {false} startGame = {this.props.startGame}/>}
					</div> 
					<div className="extended-right-panel">
						<video className='videoTag' autoPlay loop muted>
							<source src={DarkVideo} type='video/mp4' />
						</video>
					</div>
				</div>
			</div>
		);
	}
}
export default Frontpage;