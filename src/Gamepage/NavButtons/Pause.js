import React from 'react';
import './NavButtons.css';

const Pause = ({onPlayerClick}) => {
  return (
<svg className="navmenubtn" width="334px" height="446px" viewBox="0 0 334 446" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" onClick={onPlayerClick}>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard-Copy-5" transform="translate(-121.000000, -63.000000)" fill="#FFFFFF" stroke="#979797">
            <path d="M121.5,63.5 L121.5,507.5 L260.5,507.5 L260.5,63.5 L121.5,63.5 Z M185.5,140.5 L198.5,140.5 L198.5,430.5 L185.5,430.5 L185.5,140.5 Z" id="Combined-Shape"></path>
            <path d="M315.5,64.5 L315.5,508.5 L454.5,508.5 L454.5,64.5 L315.5,64.5 Z M377.5,141.5 L390.5,141.5 L390.5,426.5 L377.5,426.5 L377.5,141.5 Z" id="Combined-Shape"></path>
        </g>
    </g>
</svg>
  )
}

export default Pause