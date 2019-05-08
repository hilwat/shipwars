import React from "react";
import LogoName from "./svgfront/LogoName.js";
import ShipLogo from "./svgfront/ShipLogo.js";

import './Frontmenu.css';

function Frontmenu(props) {
  return (
			<div>
			<div className="board-with-panel">
			<div className="main-container">
				<div className="fixer-container">
					<LogoName></LogoName>
					<ShipLogo></ShipLogo>
					<ul className="button-list">
						<button className="mainbtnfront" onClick={props.playClick}>Play</button>
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