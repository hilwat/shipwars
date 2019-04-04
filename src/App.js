import React, { Component } from 'react';
import './App.css';

import Gamepage from './Gamepage/Gamepage.js';

class App extends Component {
  render() {
    return (
			<div>
				<div className="App">
				</div>
				<div>
					<Gamepage></Gamepage>
				</div>
			</div>
    );
  }
}

export default App;
