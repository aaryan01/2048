// 2048 The Game 

let i;
let j;
	
//Creating Grid

function create2DArray(rows)	{

	grid = [];

	for(i=0; i<rows; i++)	{
		grid[i]=[];
	}

	return grid;
}

create2DArray(4);

for(i=0; i<4; i++)	{
	for(j=0; j<4; j++)	{
		grid[i][j] = 0;
	}
}
	
// Assigning 2 to random positions

grid[Math.floor(4*Math.random())][Math.floor(4*Math.random())] = 2;
grid[Math.floor(4*Math.random())][Math.floor(4*Math.random())] = 2;


//Press left key

document.addEventListener('keyup', leftKey);

function leftKey(e) {
	if(e.keyCode == 37)	{

		for(i=0; i<4; i++)	{
			for(j=3; j>=0; j--)	{
				x = j;
				if(grid[i][j] == 0) {}

				else {
					for(k=x-1; k>=0; k--)	{
						if(grid[i][k] == 0){
							grid[i][k] = grid[i][j];
							grid[i][x] = 0;
							x--;
						}

						else {
							if(grid[i][k] == grid[i][j]) {
								grid[i][k] *= 2;
								grid[i][x] = 0;
								x--;
							}
							else if(grid[i][k] != grid[i][x]){}
						
						}
					}
				}
			}
		}
		grid[Math.floor(4*Math.random())][Math.floor(4*Math.random())] = 2;	
	}	
}

// Display in console
console.log(grid);