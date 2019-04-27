import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LogoName from "./svgfront/LogoName.js";
import ShipLogo from "./svgfront/ShipLogo.js";

import './Frontmenu.css';


const Frontmenu = () => (

	<div>
		<LogoName></LogoName>
		<ShipLogo></ShipLogo>
		<ul>
		<li className="mainbtnfront">
		Play</li>
		</ul>
	</div>
)
export default Frontmenu;