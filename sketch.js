
/**
 * using randomized depth-first search
 * https://en.wikipedia.org/wiki/Maze_generation_algorithm
 */


let columns, rows; 
let w = 40; //width and height of the square
let grid ;
let currentCell;


function setup() {
    createCanvas(400, 400);
    columns = width/w;
    rows = height/w;

    //creating grid with 2d array
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
    background(60); // background (color)

  // draw grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
    grid[i][j].show();
  }
}
    currentCell.visited = true;
    let next = currentCell.selectNeighbor();
    currentCell = next;

  }
  

  


  /**
   * 
   * @param { column number } i 
   * @param { row number } j
   */
  function Cell(i, j) {
    this.i = i; // position
    this.j = j; // position
    this.walls = [true, true, true, true]; // top, right, bottom, left
    this.visited = false; // mark cell as visited


    /**
     * draw the walls of the cell
     */
    this.show = function show() {
      let x = this.j*w; // x position
      let y = this.i*w; // y position

      stroke(255); // color of outlines (walls)

      line(x        , y        , x + w   , y); // top wall
      line(x + w    , y        , x + w   , y + w); // right wall
      line(x + w    , y + w    , x       , y + w); // bottom wall
      line(x        , y + w    , x       , y); // left wall

           
      if (this.visited == true) {
        fill(41, 232, 124);
        square(x, y, w);

      }
    }

    this.selectNeighbor = function selectNeighbor() {
      let neighbors = []; // neighbors array to pick from randomly

      // TODO: find top, right, left, bot neighbor and push to neighbor array


    }



  }