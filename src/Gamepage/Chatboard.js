import React from "react";
import './Chatmessage.css';

const Chatboard = () => 
	<div>
		<div className="containermsg">
			<div className="headerbox">
				<div className="headermsg-middle">
					<a>Chat Board</a>
				</div>
			</div>
			<div id="chat-box" className="messageboard clearfix" >
				<ul class="messages clearfix">
					<li className="yourmsg"> 4:00 message 1</li>
					<li className="oppmsg"> 5:00 message 2</li>
					<li className="system"> 6:00 message 3</li>
				</ul>
			<div className="enterbox">
				<input className="entrymsg" placeholder="Enter message">
				</input>
				<button className="btnsendmessage"></button>
			</div>
			</div> 
		</div>
	</div>
export default Chatboard;
