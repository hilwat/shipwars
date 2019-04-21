import React from 'react'
import './ShipSelectorLock.css';

const ShipLock = () => {
  return (
			<svg className="shiplock" width="480px" height="102px" viewBox="0 0 480 102" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
					<defs>
							<filter x="-20.3%" y="-15.6%" width="140.7%" height="131.2%" filterUnits="objectBoundingBox" id="filter-1">
									<feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
									<feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
									<feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
									<feMerge>
											<feMergeNode in="shadowMatrixOuter1"></feMergeNode>
											<feMergeNode in="SourceGraphic"></feMergeNode>
									</feMerge>
							</filter>
							<rect id="path-2" x="81" y="1010" width="480" height="93"></rect>
							<filter x="-1.7%" y="-8.6%" width="103.3%" height="117.2%" filterUnits="objectBoundingBox" id="filter-3">
									<feOffset dx="0" dy="-16" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
									<feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
									<feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.200888813 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
							</filter>
					</defs>
					<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
							<g id="Game" transform="translate(-81.000000, -1001.000000)">
									<g id="locked-padlock" filter="url(#filter-1)" transform="translate(363.000000, 1010.000000)"></g>
									<g id="Rectangle-1">
											<use fill="#00E8F1" fillRule="evenodd" xlinkHref="#path-2"></use>
											<use fill="black" fillOpacity="1" filter="url(#filter-3)" xlinkHref="#path-2"></use>
									</g>
									<path d="M509.162409,1041.92633 L508.148364,1041.92633 L508.148364,1037.20073 C508.148364,1028.46038 501.182317,1021.15905 492.475587,1021.00319 C492.237687,1020.99894 491.762313,1020.99894 491.52452,1021.00319 C482.817576,1021.15905 475.851636,1028.46038 475.851636,1037.20073 L475.851636,1041.92633 L474.837485,1041.92633 C473.274719,1041.92633 472,1043.53198 472,1045.51503 L472,1069.21671 C472,1071.19752 473.274719,1072.81818 474.837591,1072.81818 L509.162409,1072.81818 C510.725174,1072.81818 512,1071.19752 512,1069.21671 L512,1045.51503 C512,1043.53209 510.725281,1041.92633 509.162409,1041.92633 Z M495.262078,1057.61558 L495.262078,1064.91199 C495.262078,1065.74748 494.562577,1066.45455 493.726408,1066.45455 L490.273483,1066.45455 C489.437206,1066.45455 488.737705,1065.74748 488.737705,1064.91199 L488.737705,1057.61558 C487.9267,1056.81729 487.454545,1055.71346 487.454545,1054.49239 C487.454545,1052.17844 489.243268,1050.1901 491.517595,1050.09823 C491.758608,1050.08847 492.241392,1050.08847 492.482405,1050.09823 C494.756732,1050.1901 496.545455,1052.17844 496.545455,1054.49239 C496.545238,1055.71346 496.073083,1056.81729 495.262078,1057.61558 Z M502,1041.90909 L492.934083,1041.90909 L491.9749,1041.90909 L482.909091,1041.90909 L482.909091,1037.08113 C482.909091,1031.76186 487.19484,1027.36364 492.454438,1027.36364 C497.714035,1027.36364 502,1031.76186 502,1037.08113 L502,1041.90909 L502,1041.90909 Z" id="Shape" fill="#FFFFFF" fillRule="nonzero"></path>
									<text id="LOCK-BOARD" fontFamily="Phosphate-Solid, Phosphate" fontSize="55" fontWeight="normal" fill="#FFFFFF">
											<tspan x="131.025" y="1069">Get Started</tspan>
									</text>
							</g>
					</g>
			</svg>
	)
}
export default ShipLock


