import React from "react";


import Frontmenu from "./Frontmenu.js"
import Hero from "./Hero.js"
import './Frontpage.css';
import { Switch, Route, Link } from 'react-router-dom';
import Overview from "../Overview/Overview.js";
import GameType from "../GameType/GameType.js";


const Frontpage = () => (

	<div>
		<div className="board-with-panel">
			<div className="left-panel">
			<Switch>
				<Route> 
					<Route exact path="/" component={Frontmenu} />
					<Route path="/overview" component={Overview} />
					<Route path="/gametype" component={GameType} />
			 	</Route>
			 </Switch>
			</div> 
			<div className="extended-right-panel">
				<Hero></Hero>
			</div>
		</div>
	</div>
)
export default Frontpage;