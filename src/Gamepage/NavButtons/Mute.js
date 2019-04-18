import React from 'react';
import './NavButtons.css';

const Mute = ({onPlayerClick}) => {
  return (
		<svg className="navmenubtn" width="512px" height="439px" viewBox="0 0 512 439" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" onClick={onPlayerClick}>
				<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="Artboard-Copy-11" transform="translate(-22.000000, -58.000000)" fill="#FFFFFF" fill-rule="nonzero">
								<path d="M499.371,148.933 C522.207,177.002 533.626,207.601 533.625,240.72 C533.625,273.838 522.205,304.439 499.362,332.501 C476.523,360.57 445.498,382.746 406.29,399.018 C367.082,415.297 324.253,423.435 277.811,423.435 C264.487,423.435 250.687,422.671 236.415,421.149 C198.73,454.464 154.951,477.488 105.081,490.246 C95.756,492.916 84.908,495 72.533,496.522 C69.299,496.909 66.393,496.051 63.825,493.959 C61.257,491.869 59.592,489.111 58.827,485.682 L58.827,485.398 C58.257,484.634 58.208,483.491 58.685,481.965 C59.161,480.445 59.351,479.487 59.255,479.114 C59.161,478.741 59.589,477.838 60.542,476.407 L62.255,473.841 C62.255,473.841 62.923,473.033 64.254,471.418 C65.586,469.803 66.346,468.94 66.539,468.851 C67.87,467.325 70.822,464.044 75.387,458.996 C79.958,453.959 83.241,450.337 85.238,448.147 C87.237,445.961 90.187,442.2 94.086,436.872 C97.991,431.543 101.081,426.687 103.367,422.31 C105.651,417.933 108.22,412.311 111.075,405.459 C113.931,398.612 116.405,391.377 118.501,383.766 C88.615,366.826 65.064,345.886 47.837,320.955 C30.61,296.021 22,269.27 22,240.721 C22,215.977 28.757,192.326 42.273,169.772 C55.789,147.219 73.962,127.757 96.807,111.387 C119.648,95.019 146.865,82.028 178.46,72.417 C210.055,62.805 243.174,58 277.817,58 C324.26,58 367.091,66.138 406.295,82.41 C445.5,98.684 476.528,120.859 499.371,148.933 Z M271.474229,231.058241 L327.450696,175.338291 L334.965988,182.827279 L278.993988,238.542782 L334.896175,294.183159 L327.371059,301.683344 L271.464073,246.038191 L214.494952,302.746244 L206.97966,295.257257 L263.944314,238.553649 L213.980916,188.824249 L221.506032,181.324064 L271.474229,231.058241 Z M270.203737,198.987485 L212.956744,141.967128 L173.585786,181.183766 L230.833527,238.204868 L171,297.806133 L210.368705,337.012161 L270.198809,277.414306 L327.254981,334.244596 L366.625938,295.027958 L309.569019,238.196923 L370.404112,177.59798 L331.035407,138.391952 L270.203737,198.987485 Z" id="Combined-Shape"></path>
						</g>
				</g>
		</svg>
  )
}

export default Mute