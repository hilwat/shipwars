import React from "react";
import Header from "./Header";

const grids = [[1,2,3], [4, 5, 6], [6, 7, 8]]


class Board extends React.Component {
	render(){
		const headerRow = 
			<tr>
				<th>  </th>
				<th> 1 </th>
				<th> 2 </th>
				<th> 3 </th>
				<th> 4 </th>
				<th> 5 </th>
				<th> 6 </th>
				<th> 7 </th>
				<th> 8 </th>
				<th> 9 </th>
				<th> 10 </th>
			 </tr>
			
	const gridLayout = grids.map((row, index) => {
		return <tr>{row.map((grid, colIndex) => {
			return( 
			<td style={{width: "50px", height: "50px"}}>
				<grid></grid>
				<p>{`i:${index}:${colIndex}`}</p>
			</td>
			)
		})}</tr>
	})
	return (
		<div>
			<div className="board">
			<table> 
				{headerRow}
				{gridLayout}
			</table>
		</div>
	</div>

		)
	}
	
}
	 
export default Board;