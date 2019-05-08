import React, { Component } from 'react';
import './App.css';
import Frontpage from './Frontpage/Frontpage.js';
import Gamepage from './Gamepage/Gamepage.js';
import Footer from "./Gamepage/Footer.js"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends Component {
	state = {
		display: 1
	}

	startGame = () => this.setState({display:2})
	loseGame = () => this.setState({display:3})
	winGame = () => this.setState({display:4})
	leftGame = () => this.setState({display:5})
	fullGame = () => this.setState({display:6})

  render() {
    return (
			<div>
				<div className="App">
				</div>
				<div>
						{this.state.display===1 && <Frontpage startGame= {this.startGame}/>}
						{this.state.display===2 && <Gamepage loseGame = {this.loseGame} winGame = {this.winGame} leftGame = {this.leftGame} fullGame = {this.fullGame}/>}
				</div>
				<div>
				<Footer></Footer>
				</div>
			</div>
    );
  }
}

export default App;
