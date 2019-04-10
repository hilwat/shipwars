import React from "react";
import './Chatmessage.css';

const Chatboard = () => 
	<div className="containermsg">
		<div className="headerbox">
				<div className="headermsg-middle">
					<a>Chat Board</a>
				</div>
		</div>
		<div className="messageboard">
			<p className="yourmsg"> 4:00 message 1</p>
			<p className="oppmsg"> 5:00 message 2</p>
			<p className="system"> 6:00 message 3</p>
		</div> 
		<div className="enterbox">
		<input className="entrymsg" placeholder="Enter message">
		</input>
		<button className="btnsendmessage"></button>
		</div>
	</div>
export default Chatboard;
