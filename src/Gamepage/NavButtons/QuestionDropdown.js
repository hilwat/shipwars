import React, { Component } from "react";
import Question from "./Question.js";
import DropDown from "./DropDown.js";

class QuestionDropdown extends Component {

	constructor(props) {
		super(props)
		this.state = {
			dropdown: false
		}
	}
	
	handleDropdownClick = () => {
		if (!this.state.dropdown) {
			this.setState({dropdown: true})
		} else {
			this.setState({dropdown: false})
		}
	}
	
		render() {
			return (
				<div className="dropdown">
					{this.state.dropdown? <Question onQuestionClick={this.handleDropdownClick} /> : <div><DropDown/><Question onQuestionClick={this.handleDropdownClick} /></div>}
				</div>
			)
		}
	}
	
	export default QuestionDropdown