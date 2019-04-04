import React from "react";

function numberToLetterSpecial(number){
	if (number === 0) return 
	var letters = [0,"A","B","C","D","E","F","G","H","I","J"]
	var letterY = letters[number]
	return letterY
}
function numberToLetter(number){
	var letters = [0,"A","B","C","D","E","F","G","H","I","J"]
	var letterY = letters[number]
	return letterY
}


const ColumnHeader = () => {
	const headerArray = Array(10)
	headerArray.fill(1)
	const something = headerArray.map((thing , index) => 
		index > 0  ? <div>{index}</div> : <div></div>
	)
	return <div className="row">{something}</div>
}

function GridColumns(props) {
  const rows = props.rows
  const columns = rows.map((row, rowNumber) => 
	<div className="row"><div>{numberToLetterSpecial(rowNumber)}</div><GridRow grids={rows} rowNumber={rowNumber + 1}/></div>
	)
  return columns
}

function Grid(props) {
	const columnNumber = props.columnNumber 
	const rowLetter = props.rowLetter
	return <div className="square unselected"></div>
}

function GridRow(props) {
  const grids = props.grids
	const rowNumber = props.rowNumber
	const rowLetter = numberToLetter(rowNumber)
	const gridItems = grids.map((grid, columnNumber) => 
		<Grid columnNumber={columnNumber} rowLetter={rowLetter}/>
  )
  return <div className="column">{gridItems}</div>
}
function Board(){
  const rowArray = Array(10)
  const gridArray = Array(10).fill(rowArray)
  return <div className="board"> <ColumnHeader/> <GridColumns style={{width: "200px"}} rows={gridArray}/></div>
}
export default Board


