import React from "react";

import './Overview.css';
import BattleshipSVG from "./ShipSVG/BattleshipSVG.js";
import CarrierSVG from "./ShipSVG/CarrierSVG.js";
import CruiserSVG from "./ShipSVG/CruiserSVG.js";
import DestroyerSVG from "./ShipSVG/DestroyerSVG.js";
import SubmarineSVG from "./ShipSVG/SubmarineSVG.js";
import DividingSVG from "./ShipSVG/DividingSVG.js";

import FriendCode from "../FriendCode/FriendCode.js";

import SmallLogo from "./ShipSVG/SmallLogo.js";

import {Link} from 'react-router-dom';


const Overview = () => (

	<div>
		<SmallLogo></SmallLogo>
		<FriendCode/>
		<div className="main-container">
			 <div className="fixer-container">
			 		<div className="orientation-title">
						<h1>YOUR MATCHED!</h1>
						<h1>RULES:</h1>
					</div>
				</div>
		</div>
		
		<DividingSVG/>
		<p>You will have <strong> 2 minutes </strong> to place each of the following:</p>
		<DividingSVG/>
		<div className="main-container">
			 <div className="fixer-container">
		<table>
		<tr>
				<th><strong>Ship</strong></th>
				<th><strong>Type</strong></th>
				<th><strong>Tiles</strong></th>
			</tr>
			<tr>
				<th><CarrierSVG/></th>
				<th>Carrier</th>
				<th>5</th>
			</tr>
			<tr>
				<th><BattleshipSVG/></th>
				<th>Battleship</th>
				<th>4</th>
			</tr>
			<tr>
				<th><CruiserSVG></CruiserSVG></th>
				<th>Cruiser</th>
				<th>3</th>
			</tr>
			<tr>
				<th><SubmarineSVG></SubmarineSVG></th>
				<th>Submarine</th>
				<th>3</th>
			</tr>
			<tr>
				<th><DestroyerSVG></DestroyerSVG></th>
				<th>Destroyer</th>
				<th>2</th>
		 </tr>
		</table>
		<DividingSVG/>
		<Link to='/gamepage'>
		<button className="overviewbtn">Start Game</button>
		</Link>
		</div>
		</div>
	</div>
)
export default Overview;