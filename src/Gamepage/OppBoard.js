import React from "react";
import './GridSquare.css';

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


const ColumnHeader = () => {
	const headerArray = Array(11)
	headerArray.fill(1)
	const something = headerArray.map((thing , index) => 
		index > 0  ? <div className="board-square board-head-top">{index}</div> : 
		<div className="board-square board-head-top"></div>
	)
	return <div className="board-row">{something}</div>
}

function GridColumns(props) {
  const rows = props.rows
  const columns = rows.map((row, rowNumber) => 
	<div className="board-row"><div className="board-square board-head-left">{numberToLetterSpecial(rowNumber)}</div><GridRow grids={rows} rowNumber={rowNumber + 1}/></div>
	)
  return columns
}

function Grid(props) {
	const columnNumber = props.columnNumber 
	const rowLetter = props.rowLetter
	const onClick = () => console.log(columnNumber, rowLetter) 
	return <div className="board-square board-unselected board-normal" onClick={onClick}>?</div>
}

function GridRow(props) {
  const grids = props.grids
	const rowNumber = props.rowNumber
	const rowLetter = numberToLetter(rowNumber)
	const gridItems = grids.map((grid, columnNumber) => 
		<Grid columnNumber={columnNumber +1} rowLetter={rowLetter}/>
  )
  return <div className="board-row">{gridItems}</div>
}
function OppBoard(){
  const rowArray = Array(10)
  const gridArray = Array(10).fill(rowArray)
  return <div className="board"> <ColumnHeader/> <GridColumns style={{width: "20px"}} rows={gridArray}/></div>
}
export default OppBoard

