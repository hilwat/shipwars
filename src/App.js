import React, { Component } from 'react';
import './App.css';
import Gamepage from './Gamepage/Gamepage.js';
import Footer from "./Gamepage/Footer.js"

class App extends Component {
  render() {
    return (
			<div>
				<div className="App">
				</div>
				<div>
					<Gamepage></Gamepage>
				</div>
				<div>
				<Footer></Footer>
				</div>
			</div>
    );
  }
}

export default App;
