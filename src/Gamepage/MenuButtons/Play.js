import React from 'react'
import './MenuButtons.css';

const Play = ({onPlayerClick}) => {
  return (
<svg className="menubtn"  width="366px" height="404px" viewBox="0 0 366 404" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" onClick={onPlayerClick}>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard-Copy-6" transform="translate(-119.000000, -59.000000)" fill="#FFFFFF">
            <path d="M184.358431,351.86377 L184.354507,175.969372 L344.073863,265.460028 L340.441893,267.119015 L184.358431,351.86377 Z M176.672669,362.354886 L176.358527,363.608176 L356.358527,267.89161 L355.14519,267.260145 L361.358527,265.72405 L352.49778,260.856747 L176.358527,162.608176 L176.358527,362.608176 L176.672669,362.354886 Z M120.556641,59.90625 L485,261.565281 L119.976563,462.652344 L120.556641,59.90625 Z" id="Combined-Shape"></path>
        </g>
    </g>
</svg>
  )
}

export default Play
