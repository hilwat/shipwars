import React from 'react'
import './NavButtons.css';

const Play = ({onPlayerClick}) => {
  return (
<svg className="navmenubtn" width="365px" height="366px" viewBox="0 0 365 366" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" onClick={onPlayerClick}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Artboard-Copy-6" transform="translate(-120.000000, -97.000000)" fill="#FFFFFF">
            <path d="M183.99988,361.236602 L183.996027,204.097432 L343.053191,282.888699 L340.083366,285.194864 L183.99988,361.236602 Z M175.030615,371.980033 L174.84375,377.335938 L363.626622,283.503054 L364.141602,283.413086 L174.708984,185.625 L175,191.424213 L175,372 L175.030615,371.980033 Z M120.580041,97 L485,280.259891 L120,463 L120.580041,97 Z" id="Combined-Shape"></path>
        </g>
    </g>
</svg>
  )
}

export default Play
