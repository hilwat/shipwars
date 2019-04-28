import React from "react";


import Frontmenu from "./Frontmenu.js"
import Hero from "./Hero.js"
import './Frontpage.css';
import Footer from "../Gamepage/Footer.js"


const Frontpage = () => (

	<div>
		<div className="board-with-panel">
			<div className="left-panel">
			 <Frontmenu></Frontmenu>
			</div> 
			<div className="extended-right-panel">
				<Hero></Hero>
			</div>
		</div>
	</div>
)
export default Frontpage;