import React from "react";
import LogoName from "./svgfront/LogoName.js";
import ShipLogo from "./svgfront/ShipLogo.js";
import {Link} from 'react-router-dom';

import './Frontmenu.css';

function Frontmenu() {
  return (
			<div>
			<div className="board-with-panel">
			<div className="main-container">
				<div className="fixer-container">
					<LogoName></LogoName>
					<ShipLogo></ShipLogo>
					<ul className="button-list">
						<Link to='/gametype'>
						<button className="mainbtnfront">Play</button>
						</Link>
						<button className="otherbtnfront">Stats</button>
						<button className="otherbtnfront">Options</button>
						<button className="otherbtnfront">Help</button>
					</ul>
				</div>
			</div>
			</div>
		</div>
 );
}
export default Frontmenu;