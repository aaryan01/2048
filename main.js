// 2048 The Game 

let i;
let j;
let m;
let n;
let y;
let u;
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
	
// Assigning 2 to random positions

grid[Math.floor(4*Math.random())][Math.floor(4*Math.random())] = 2;
grid[Math.floor(4*Math.random())][Math.floor(4*Math.random())] = 2;



function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Swap




// Random Number every turn

function randomTwo(array)	{

	 m = getRandomArbitrary(0,4);
	 n = getRandomArbitrary(0,4);
	 console.log(m,n);
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

		
	}	
}


//Press right key

document.addEventListener('keyup', rightKey);

function rightKey(e) {
	if(e.keyCode == 39)	{
	
		for(i=0; y<4; i++)	{
			for(j=0; j<4; j++)	{
				for(x=j; x<3; x++)	{
					if(grid[i][x] == 0 && grid[i][x+1] == 0){}

					if(grid[i][x] == 0 && grid[i][x+1] !=0){}

					if(grid[i][x] !=0 && grid[i][x+1] == 0)	{
						grid[i][x+1] = grid[i][x];
						grid[i][x] = 0;
					}
					if(grid[i][x] != 0 && grid[i][x+1] != 0 && grid[i][x] == grid[i][x+1]) {
						grid[i][x+1] += grid[i][x];
						grid[i][x] == 0;
					} 
					if(grid[i][x] != 0 && grid[i][x+1] != 0 && grid[i][x] != grid[i][x+1]) {}

				}
			}
		}
		console.log(grid);
		randomTwo(grid);
	}	
}


//Press up key

document.addEventListener('keyup', upKey);

function upKey(e) {
	if(e.keyCode == 38)	{

		
	}	
}

//Press down key

document.addEventListener('keyup', downKey);

function downKey(e) {
	if(e.keyCode == 40)	{

		
	}	
}







// Display in console
console.log(grid);