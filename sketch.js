
/**
 * using randomized depth-first search
 * https://en.wikipedia.org/wiki/Maze_generation_algorithm
 */


let columns, rows; 
let w = 40; // width and height of a cell, changes also numbers of cells
let grid ;
let currentCell;
let stack = [];


function setup() {
    createCanvas(400, 400);
    columns = width/w;
    rows = height/w;

    // creating grid with 2d array
    grid = new Array(columns);
    for (let index = 0; index < grid.length; index++) {
      grid[index] = new Array(rows);
    }

    // filling the grid with cells
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        let cell = new Cell(i, j);
        grid[i][j] = cell;
      }      
      
    }

    currentCell = grid[0][0];
  }
  





  function draw() {
    background(60);                             // background (color)
    frameRate(5)

  // draw grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
    grid[i][j].show();
    }
  }
    currentCell.visited = true;                 // mark currentcell as visited
    currentCell.highlight();
    let next = currentCell.selectNeighbor();    // select neighbor of currentCell


    if (next) {

      next.visited = true;

      stack.push(currentCell);

      removeWall(currentCell, next);
      currentCell = next;
    } else if (stack.length > 0) {

      currentCell = stack.pop();;


    }                     

    

  }
  

  


function removeWall( srcWall, destWall) {
  if (srcWall.i > destWall.i && srcWall.j == destWall.j) {      // to top
    srcWall.walls[0] = false;
    destWall.walls[2] = false;
  }

  if (srcWall.i == destWall.i && srcWall.j < destWall.j) {      // to right
    srcWall.walls[1] = false;
    destWall.walls[3] = false;
  }

  if (srcWall.i < destWall.i && srcWall.j == destWall.j) {      // to bottom
    srcWall.walls[2] = false;
    destWall.walls[0] = false;
  }
  
  if (srcWall.i == destWall.i && srcWall.j > destWall.j) {      // to left
    srcWall.walls[3] = false;
    destWall.walls[1] = false;
  }

}













