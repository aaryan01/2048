-// 2048 The Game 

let i;
let j;
let m;
let n;
let y;
let u;
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



function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


// Random Number every turn

function randomTwo(arr)	{

	 m = getRandomArbitrary(0,4);
	 n = getRandomArbitrary(0,4);
	 console.log(m,n);
	if(arr[m][n] == 0){
		arr[m][n] = 2;
		return;
	}
	else randomTwo(arr);
}


// Avoid Double merge

let mapping = create2DArray(4);

for(y=0; y<4; y++)	{
	for(u=0; u<4; u++)	{
		mapping[y][u] = 0;
	}
}



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
						    grid[i][k] = grid[i][x];
							grid[i][x] = 0;
							if(x!=3)grid[i][x] = grid[i][++x];
							x--;
						}

						else if(grid[i][k] == grid[i][x]) {

							if(mapping[i][x] === 0){
								grid[i][k] *= 2;
								mapping[i][k] = 1;
								grid[i][x] = 0;
								if(x!=3)grid[i][x] = grid[i][++x];
								x--;
							}
							else {}
							
						}

						else {x--;}
						
					}
				}
					
									
			}

						for(y=0; y<4; y++)	{
							for(u=0; u<4; u++)	{
								mapping[y][u] = 0;
							}
						}

		}
					
		randomTwo(grid);
		console.log(grid);
	}	
}


//Press right key

document.addEventListener('keyup', rightKey);

function rightKey(e) {
	if(e.keyCode == 39)	{

		for(i=0; i<4; i++)	{
			for(j=0; j<4; j++)	{
				x = j;
				if(grid[i][j] == 0) {}

				else {
					for(k=x+1; k<4; k++)	{
						if(grid[i][k] == 0){
						    grid[i][k] = grid[i][x];
							grid[i][x] = 0;
							if(x!=0)grid[i][x] = grid[i][--x];
							x++;
						}

						else if(grid[i][k] == grid[i][x]) {

							grid[i][k] *= 2;
							grid[i][x] = 0;
							if(x!=0)grid[i][x] = grid[i][--x];
							x++;
							}

						else {x++;}
						
					}
				}
									
			}
		}
					
		randomTwo(grid);
		console.log(grid);
	}	
}


//Press up key

document.addEventListener('keyup', upKey);

function upKey(e) {
	if(e.keyCode == 38)	{

		for(j=0; j<4; j++)	{
			for(i=3; i>=0; i--)	{
				x = i;
				if(grid[i][j] == 0) {}

				else {
					for(k=x-1; k>=0; k--)	{
						if(grid[k][j] == 0){
						    grid[k][j] = grid[x][j];
							grid[x][j] = 0;
							if(x!=3)grid[x][j] = grid[x++][j];
							x--;
						}

						else if(grid[k][j] == grid[x][j]) {

							grid[k][j] *= 2;
							grid[x][j] = 0;
							if(x!=3)grid[x][j] = grid[x++][j];
							x--;
							}

						else {x--;}
						
					}
				}
									
			}
		}
					
		randomTwo(grid);
		console.log(grid);
	}	
}

//Press down key

document.addEventListener('keyup', downKey);

function downKey(e) {
	if(e.keyCode == 40)	{

		for(j=0; j<4; j++)	{
			for(i=0; i<4; i++)	{
				x = i;
				if(grid[i][j] == 0) {}

				else {
					for(k=x+1; k<4; k++)	{
						if(grid[k][j] == 0){
						    grid[k][j] = grid[x][j];
							grid[x][j] = 0;
							if(x!=0)grid[x][j] = grid[x--][j];
							x++;
						}

						else if(grid[k][j] == grid[x][j]) {

							grid[k][j] *= 2;
							grid[x][j] = 0;
							if(x!=0)grid[x][j] = grid[x--][j];
							x++;
							}

						else {x++;}
						
					}
				}
									
			}
		}
					
		randomTwo(grid);
		console.log(grid);
	}	
}







// Display in console
console.log(grid);