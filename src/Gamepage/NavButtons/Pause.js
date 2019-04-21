import React from 'react';
import './NavButtons.css';

const Pause = ({onPlayerClick}) => {
  return (
		<svg className="navmenubtn" width="320px" height="362px" viewBox="0 0 320 362" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" onClick={onPlayerClick}>
				<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<g id="Artboard-Copy-5" transform="translate(-113.000000, -84.000000)" fill="#FFFFFF" stroke="#979797">
								<path d="M113.5,84.5 L113.5,445.5 L246.5,445.5 L246.5,84.5 L113.5,84.5 Z M174.5,146.5 L187.5,146.5 L187.5,382.5 L174.5,382.5 L174.5,146.5 Z" id="Combined-Shape"></path>
								<path d="M299.5,85.5 L299.5,443.5 L432.5,443.5 L432.5,85.5 L299.5,85.5 Z M358.5,148.5 L371.5,148.5 L371.5,377.5 L358.5,377.5 L358.5,148.5 Z" id="Combined-Shape"></path>
						</g>
				</g>
		</svg>
  )
}

export default Pause