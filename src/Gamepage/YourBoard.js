import React from "react";
import './GridSquare.css';

import {getGrid} from "./Logic.js"

const grid = getGrid()
console.log(grid)

function numberToLetterSpecial(number){
	//without 0 in index zero
	var letters = ["A","B","C","D","E","F","G","H","I","J"]
	var letterY = letters[number]
	return letterY
}
function numberToLetter(number){
	var letters = [0,"A","B","C","D","E","F","G","H","I","J"]
	var letterY = letters[number]
	return letterY
}


function YourBoard() {
		const rowArray = Array(10)
		const gridArray = Array(10).fill(rowArray)
		return <div className="board"> <ColumnHeader/> <GridColumns style={{width: "20px"}} rows={gridArray}/></div>
  
}

function GridColumns(props) {
	const rows = props.rows
  const columns = rows.map((row, rowNumber) => 
	<div className="board-row"><div className="board-square board-head-left">{numberToLetterSpecial(rowNumber)}</div><GridRow grids={rows} rowNumber={rowNumber + 1} boardPosition={props.boardPosition}/></div>
	)
  return columns
}
const ColumnHeader = () => {
	const headerArray = Array(11)
	headerArray.fill(1)
	const something = headerArray.map((thing , index) => 
		index > 0  ? <div className="board-square board-head-top">{index}</div> : 
		<div className="board-square board-head-top"></div>
	)
	return <div className="board-row">{something}</div>
}



class GridRow extends React.Component {
	state = {
	}
	componentWillMount(){
		this.setState({grid: grid})
	}
	render(){
		
		const grids = this.props.grids
		const rowNumber = this.props.rowNumber
		const rowLetter = numberToLetter(rowNumber)
		const gridItems = grids.map((grid, columnNumber) => {
		//check if ship = shipcode or else 
			return <Grid shipCode={this.state.grid[columnNumber][rowNumber]} columnNumber={columnNumber +1} rowLetter={rowLetter}/>
		})
  		return <div className="board-row">{gridItems}</div>
	}
}


class Grid extends React.Component {
	
	render() {
		const columnNumber = this.props.columnNumber 
		const rowLetter = this.props.rowLetter
		const color= this.props.shipCode ? 'blue' : 'green'
		const styles = {
			backgroundColor: color
		}
		const onClick = () => console.log(columnNumber, rowLetter) 
		return <div className="board-square board-unselected board-normal" onClick={onClick} style= {styles}></div>
	}
	
}






export default YourBoard

