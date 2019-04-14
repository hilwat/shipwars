import React from "react";
import './YourShipSelector.css';
import Destroyer from '../Images/Img-Destroyer-Ship.png';
import Submarine from '../Images/Img-Submarine-Ship.png';
import Cruiser from '../Images/Img-Cruiser-Ship.png';
import Battleship from '../Images/Img-Battleship-Ship.png';
import Carrier from '../Images/Img-Carrier-Ship.png';

const YourShipSelector = () => 
	<div>
		<div className="ship-selector">
			<h2 className="ship-overview">Re-Position: select the ship below then the tiles to place it on </h2>
			<div className="selector-column">
				<div className="selector-row">
					<div className="selector-square"><img src={Destroyer} alt="blue destroyer" className="shipimg"></img>Destroyer (2 tiles)</div>
					<div className="selector-square"><img src={Submarine} alt="blue submarine" className="shipimg"></img>Submarine (3 tiles)</div>
				</div>
			</div>
			<div className="selector-column">
				<div className="selector-row">
					<div className="selector-square"><img src={Cruiser} alt="blue submarine" className="shipimg"></img>Cruiser (3 tiles)</div>
					<div className="selector-square"><img src={Battleship} alt="blue submarine" className="shipimg"></img>Battleship (4 tiles)</div>
			</div>
			</div>
			<div className="selector-column"></div>
				<div className="selector-row">
					<div className="selector-square"><img src={Carrier} alt="blue carrier" className="shipimg"></img>Carrier (5 tiles)</div>
				</div>
			</div>
	</div>	
export default YourShipSelector;

// XXXXXXX

// const ColumnHeader = () => {
// 	const headerArray = Array(4)
// 	headerArray.fill(1)
// 	const something = headerArray.map((thing , index) => 
// 		index > 0  ? <div className="board-square board-head-top">{index}</div> : 
// 		<div className="board-square board-head-top"></div>
// 	)
// 	return <div className="board-row">{something}</div>
// }

// function GridColumns(props) {
//   const rows = props.rows
//   const columns = rows.map((row, rowNumber) => 
// 	<div className="board-row"><div className="board-square board-head-left">{numberToLetterSpecial(rowNumber)}</div><GridRow grids={rows} rowNumber={rowNumber + 1}/></div>
// 	)
//   return columns
// }

// function Grid(props) {
// 	const columnNumber = props.columnNumber 
// 	const rowLetter = props.rowLetter
// 	const onClick = () => console.log(columnNumber, rowLetter) 
// 	return <div className="board-square board-unselected board-normal" onClick={onClick}></div>
// }

// function GridRow(props) {
//   const grids = props.grids
// 	const rowNumber = props.rowNumber
// 	const rowLetter = numberToLetter(rowNumber)
// 	const gridItems = grids.map((grid, columnNumber) => 
// 		<Grid columnNumber={columnNumber +1} rowLetter={rowLetter}/>
//   )
//   return <div className="board-row">{gridItems}</div>
// }
// function YourBoard(){
//   const rowArray = Array(10)
//   const gridArray = Array(10).fill(rowArray)
//   return <div className="board"> <ColumnHeader/> <GridColumns style={{width: "20px"}} rows={gridArray}/></div>
// }
