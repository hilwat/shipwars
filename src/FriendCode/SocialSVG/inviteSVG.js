import React from 'react';
import './SocialSVG.css';

const imessenger= () => {
  return (
		<svg className="invite-SVG" width="500px" height="80px" viewBox="0 0 500 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
				<defs>
						<rect id="path-1" x="429" y="530" width="145" height="76"></rect>
						<filter x="-5.5%" y="-10.5%" width="111.0%" height="121.1%" filterUnits="objectBoundingBox" id="filter-2">
								<feOffset dx="0" dy="-16" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
								<feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
								<feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.200888813 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
						</filter>
				</defs>
				<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<g id="Home-Copy-4" transform="translate(-74.000000, -528.000000)">
								<rect id="Rectangle-2" stroke="#2979FF" strokeWidth="6" fillRule="nonzero" x="77" y="531" width="494" height="74"></rect>
								<g id="Rectangle-1">
										<use fill="#2979FF" fillRule="evenodd" xlinkHref="#path-1"/>
										<use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1"/>
								</g>
								<text id="COPY" fontFamily="Phosphate-Solid, Phosphate" fontSize="40" fontWeight="normal" fill="#FFFFFF">
										<tspan x="454.7" y="580">COPY</tspan>
								</text>
								<text id="Shipwars.io/3215F" fontFamily="Roboto-Regular, Roboto" fontSize="38" fontWeight="normal" fill="#4A4A4A">
										<tspan x="91" y="580"></tspan>
								</text>
						</g>
				</g>
		</svg>
	 )
	}
	export default imessenger