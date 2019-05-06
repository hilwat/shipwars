import React from "react";

import Fbmsg from "./SocialSVG/fbmsg.js";
import Imessenger from "./SocialSVG/imessenger.js";
import Telegram from "./SocialSVG/telegram.js";
import Whatsapp from "./SocialSVG/whatsapp.js";
import InviteSVG from "./SocialSVG/inviteSVG.js";

import './FriendCode.css';

const FrontCode = () => (
			<div>
				<h1>Invite Code</h1>
				<InviteSVG/>
				<h1>Or Invite Via</h1>
				<div className="main-container">
				<div className="fixer-container">
				<div className="social-icons">
					<Imessenger/>
					<Telegram/>
					<Whatsapp/>
					<Fbmsg/>
				</div>
				</div>
				</div>
			</div>
	)
export default FrontCode