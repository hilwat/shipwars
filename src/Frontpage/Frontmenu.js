import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LogoName from "./svgfront/LogoName.js";
import ShipLogo from "./svgfront/ShipLogo.js";
import GamePage from "../Gamepage/Gamepage.js";

import './Frontmenu.css';

function Play() {
  return <h2>Play</h2>;
}

function Frontmenu() {
  return (
	<Router>
			<div>
			<div className="main-container">
				<div className="fixer-container">
					<LogoName></LogoName>
					<ShipLogo></ShipLogo>
					<ul>
						<button className="mainbtnfront">
							<Link to="/Gamepage">Play</Link>
						</button>
						<button className="otherbtnfront">Stats</button>
						<li className="otherbtnfront"> 
							<Link>Options</Link>
						</li>
						<li className="otherbtnfront"> 
							<Link>Help</Link>
						</li>
					</ul>
					</div>
			</div>
		<Switch>
			<Route path="/Gamepage/" component={GamePage} />
			</Switch>
			</div>
	</Router>
 );
}
export default Frontmenu;