// 2048 The Game 

let i;
let j;
let m;
let n;
let y;
let x;
//Creating Grid

function create2DArray(rows)	{

	arr = [];

	for(i=0; i<rows; i++)	{
		arr[i]=[];
	}

	return arr;
}


let grid = create2DArray(4);

for(i=0; i<4; i++)	{
	for(j=0; j<4; j++)	{
		grid[i][j] = 0;
	}
}
	

grid[getRandomArbitrary(0,4)][getRandomArbitrary(0,4)] = 2;
grid[getRandomArbitrary(0,4)][getRandomArbitrary(0,4)] = 2;


// Display

let cell = document.getElementsByClassName("tile");

for(x=0;x<16;x++)	{
	cell[x].style = "font-size : 30px";
}

x=0;
for(i=0; i<4; i++)	{
	for(j=0; j<4; j++)	{
		if(grid[i][j] != 0)	
		cell[x++].innerHTML = grid[i][j];

		else
			cell[x++].innerHTML = ""
	}
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


// Random Number every turn

function randomTwo(array)	{

	 m = getRandomArbitrary(0,4);
	 n = getRandomArbitrary(0,4);
	if(array[m][n] == 0){
		array[m][n] = 2;
		return;
	}
	else randomTwo(array);
}





//Press left key

document.addEventListener('keyup', leftKey);

function leftKey(e) {
	if(e.keyCode == 37)	{
		for(i=0; i<4; i++)	{
			for(j=1; j<4; j++)	{
				if(grid[i][j] != 0)	{
					for(x=j; x>0; x--)	{
						if(grid[i][x-1] == 0)	{
							grid[i][x-1] = grid[i][x];
							grid[i][x] = 0;
						}
						else if(grid[i][x] == grid[i][x-1])	{
							grid[i][x-1] *= 2;
							grid[i][x] = 0;
							break;
						}
						else break;
					}
				}
			}
		}		


	console.log(grid);
	randomTwo(grid);
		
	x=0;
for(i=0; i<4; i++)	{
	for(j=0; j<4; j++)	{
		if(grid[i][j] != 0)	
		cell[x++].innerHTML = grid[i][j];

		else
			cell[x++].innerHTML = ""
	}
}
	}	
}


//Press right key

document.addEventListener('keyup', rightKey);

function rightKey(e) {
	if(e.keyCode == 39)	{
		for(i=0; i<4; i++)	{
			for(j=2; j>=0; j--)	{
				if(grid[i][j] != 0)	{
					for(x=j; x<3; x++)	{
						if(grid[i][x+1] == 0)	{
							grid[i][x+1] = grid[i][x];
							grid[i][x] = 0;
						}
						else if(grid[i][x] == grid[i][x+1])	{
							grid[i][x+1] *= 2;
							grid[i][x] = 0;
							break;
						}
						else break;
					}
				}
			}
		}	

	console.log(grid);
	randomTwo(grid);

x=0;
for(i=0; i<4; i++)	{
	for(j=0; j<4; j++)	{
		if(grid[i][j] != 0)	
		cell[x++].innerHTML = grid[i][j];

		else
			cell[x++].innerHTML = ""
	}
}
	}	
}


//Press up key

document.addEventListener('keyup', upKey);

function upKey(e) {
	if(e.keyCode == 38)	{
		for(j=0; j<4; j++)	{
			for(i=1; i<4; i++)	{
				if(grid[i][j] != 0)	{
					for(x=i; x>0; x--)	{
						if(grid[x-1][j] == 0)	{
							grid[x-1][j] = grid[x][j];
							grid[x][j] = 0;
						}
						else if(grid[x][j] == grid[x-1][j])	{
							grid[x-1][j] *= 2;
							grid[x][j] = 0;
							break;
						}
						else break;
					}
				}
			}
		}	
	
	console.log(grid);
	randomTwo(grid);
		
	x=0;
for(i=0; i<4; i++)	{
	for(j=0; j<4; j++)	{
		if(grid[i][j] != 0)	
		cell[x++].innerHTML = grid[i][j];

		else
			cell[x++].innerHTML = ""
	}
}
	}	
}

//Press down key

document.addEventListener('keyup', downKey);

function downKey(e) {
	if(e.keyCode == 40)	{
		for(j=0; j<4; j++)	{
			for(i=2; i>=0; i--)	{
				if(grid[i][j] != 0)	{
					for(x=i; x<3; x++)	{
						if(grid[x+1][j] == 0)	{
							grid[x+1][j] = grid[x][j];
							grid[x][j] = 0;
						}
						else if(grid[x+1][j] == grid[x][j])	{
							grid[x+1][j] *= 2;
							grid[x][j] = 0;
							break;
						}
						else break;
					}
				}
			}
		}		


	console.log(grid);
	randomTwo(grid);
	x=0;
for(i=0; i<4; i++)	{
	for(j=0; j<4; j++)	{
		if(grid[i][j] != 0)	
		cell[x++].innerHTML = grid[i][j];

		else
			cell[x++].innerHTML = "";
	}
}
	}	
}


// Display in console
console.log(grid);