import React from 'react';
import './NavButtons.css';

const Silence = ({onPlayerClick}) => {
  return (
		<svg className="navmenubtn" width="437px" height="295px" viewBox="0 0 437 295" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" onClick={onPlayerClick}>
				<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<g id="Artboard-Copy-8" transform="translate(-68.000000, -136.000000)" fill="#FFFFFF">
								<path d="M258.057975,430.220267 C256.317095,431.041587 214.403812,401.172523 132.318128,340.613075 L76.254498,340.613075 C65.6223693,340.622167 65.6223693,225.675291 76.254498,225.675291 L132.322685,225.675291 C211.649698,163.821734 253.56298,133.9557 258.062532,136.07719 C264.81186,139.236695 264.81186,427.060762 258.057975,430.220267 Z" id="Path" fillRule="nonzero"></path>
								<path d="M405.474229,281.058241 L355.506032,231.324064 L347.980916,238.824249 L397.944314,288.553649 L340.97966,345.257257 L348.494952,352.746244 L405.464073,296.038191 L461.371059,351.683344 L468.896175,344.183159 L412.993988,288.542782 L468.965988,232.827279 L461.450696,225.338291 L405.474229,281.058241 Z M404.203737,248.987485 L465.035407,188.391952 L504.404112,227.59798 L443.569019,288.196923 L500.625938,345.027958 L461.254981,384.244596 L404.198809,327.414306 L344.368705,387.012161 L305,347.806133 L364.833527,288.204868 L307.585786,231.183766 L346.956744,191.967128 L404.203737,248.987485 Z" id="Combined-Shape"></path>
						</g>
				</g>
		</svg>
	)
}
export default Silence