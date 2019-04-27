import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Frontpage from './Frontpage/Frontpage.js';


class App extends Component {
  render() {
    return (
			<div>
				<div className="App">
				</div>
				<div>
					<Frontpage></Frontpage>
				</div>
			</div>
    );
  }
}

export default App;
