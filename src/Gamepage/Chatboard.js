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
			<p className="yourmsg"> message 1</p>
			<p className="oppmsg"> message 2</p>
			<p className="system"> message 3</p>
		</div> 
		<div className="entermsg">
			Enter message
		</div>
	</div>
export default Chatboard;
