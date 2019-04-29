import React from "react";

import './Overview.css';
import BattleshipSVG from "./ShipSVG/BattleshipSVG.js";
import CarrierSVG from "./ShipSVG/CarrierSVG.js";
import CruiserSVG from "./ShipSVG/CruiserSVG.js";
import DestroyerSVG from "./ShipSVG/DestroyerSVG.js";
import SubmarineSVG from "./ShipSVG/SubmarineSVG.js";

import SmallLogo from "./ShipSVG/SmallLogo.js";



const Overview = () => (

	<div>
		<SmallLogo></SmallLogo>
		<BattleshipSVG></BattleshipSVG>
		<CarrierSVG></CarrierSVG>
		<CruiserSVG></CruiserSVG>
		<DestroyerSVG></DestroyerSVG>
		<SubmarineSVG></SubmarineSVG>
	</div>
)
export default Overview;