import React, { Component } from 'react';
import './App.css';
import Frontpage from './Frontpage/Frontpage.js';
import Gamepage from './Gamepage/Gamepage.js';
import Footer from "./Gamepage/Footer.js"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
			<div>
				<div className="App">
				</div>
				<div>
					<Router>
						<Switch>
							<Route path="/" component={Frontpage} />
							<Route exact path="/gamepage" component={Gamepage} />
					 </Switch>
					</Router>
				</div>
				<div>
				<Footer></Footer>
				</div>
			</div>
    );
  }
}

export default App;
