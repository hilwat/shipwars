import React from "react";

import Board from "./Board.js"
import Footer from "./Footer.js"
import Header from "./Header.js"
import ShipSelector from "./ShipSelector.js"

const Gamepage = () => (
	<div>
		<p> hi I'm the gamepage </p>
		<Header></Header>
		<Board></Board>
		<ShipSelector></ShipSelector>
		<Footer></Footer>
	</div> 
)
export default Gamepage;