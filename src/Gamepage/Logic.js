import React from "react";
import _ from 'lodash';

/** outside of this a turn manager*/

/** Ship Objects*/

var shipDetails = [
 {type: "S1", name: "Carrier", spaces: 5},
 {type: "S2", name: "Battleship", spaces: 4},
 {type: "S3", name: "Cruiser", spaces: 3},
 {type: "S4", name: "Submarine", spaces: 3},
 {type: "S5", name: "Destroyer", spaces: 2}
]

/** Place ship appends - orientation and starting position */
	
function orientation() {/** true or false to determine = horizontal or vertical */
	var orientation = Math.random()*2 
	return (orientation > 1 ? "horizontal" : "vertical");
}/** randomly generate a number between 0 and 1 and round or see if number is divisable by 2*/

function makeOrientation(ships){
	shipsOrientation = []
	ships.map((ship) => { 
		ship["orientation"] = orientation()
		shipsOrientation.push(ship)
	})
	return shipsOrientation
}


var letters = [0,"A","B","C","D","E","F","G","H","I","J"]

function startingPosition(ship, letters) {
	if (ship.orientation === "vertical") {
	/** vertical restricts y by ship spaces */
	var x = Math.ceil(Math.random()*10)
	var y = Math.ceil(Math.random()*(10 - ship["spaces"]))
	var letterY = letters[y]
	return [x, letterY]

	} else if (ship.orientation === "horizontal"){
	var x = Math.ceil(Math.random()*(10 - ship["spaces"]))
	var y = Math.ceil(Math.random()*10)
	var letterY = letters[y]
	return [x, letterY]

	} else {
		throw new Error("hey what is going on, the orientation is not what we expected")
	}
}

var usedSpaces = []

function makeStartPosition(ships){
	var letters = [0,"A","B","C","D","E","F","G","H","I","J"]
	var updatedShips = []
	
	ships.map((ship) => { 
		var newShip = Object.assign(ship);
		newShip["positionArray"] = positionShip(ship);
		updatedShips.push(newShip);
	})
	console.log(updatedShips);
}

function positionShip(ship){
	while(true){
		var startingPositionCord = startingPosition(ship, letters)
		var positionArray = [startingPositionCord[0] + startingPositionCord[1]]
			if(ship.orientation === "horizontal"){
				for(var i = 1; i <ship.spaces; i++){
					var additionalSpaces = (startingPositionCord[0] + i)+(startingPositionCord[1])
					positionArray[i]= additionalSpaces
				}
			} else if(ship.orientation === 'vertical'){
					for(var i = 1; i < ship.spaces; i++){
						var additionalSpaces = (startingPositionCord[0])+(startingPositionCord[1])
						additionalSpaces = (startingPositionCord[0])+(letters[(letters.indexOf(startingPositionCord[1])+i)])
						positionArray[i]= additionalSpaces
					}
			}
			if(!checkIntersect(positionArray,usedSpaces)){
				return positionArray
			}
	}
}
	
function checkIntersect(positionArray, currentSpaces){
	var check = _.intersection(currentSpaces, positionArray)
	if (Array.isArray(check) && check.length > 0) {
		return true
	} else { 
		usedSpaces = _.union(currentSpaces, positionArray)
		return false
	}

}

const orientationArray = makeOrientation(shipDetails)
makeStartPosition(orientationArray)


/** Generate initial board 

Reposition ships - so I need to have a remove function that clears the spaces 

Removing 
Pass in -> ship name being removed
Pass out -> clear spaces it is taking 

Placing
Pass in -> proposed spaces and ship name 
Pass out -> confirm if valid -> YES place and confirm spaces, NO taken tell them to replace 


instead of starting position to the array of the ship and then write all the tile used to one place so it can be checked

Ship are one tile wide and varying tile length
Ships are identified by id, name, tile length, orientation, starting position 

 Randomly generate ship on to grid letter so that none are overlapping

Pre-Game 

 Let user move the ships which means...
 Validate the ships are the same length
 Verify the tiles are free 

Game starts  
 on turn each player can only hit one tile of the opponent which they haven't yet tried 
 the game ends when 16 squares of any player are hit
 Player that has 16 hits loses
 Player than survives is the winner
 */