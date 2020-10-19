 /**           OBJECT  
   *        
   * @param { column number } i 
   * @param { row number } j
   */
  function Cell(i, j) {
    this.i = i;                                 // position
    this.j = j;                                 // position
    this.walls = [true, true, true, true];      // top, right, bottom, left
    this.visited = false;                       // mark cell as visited





    /**
     * highlight current cell in another color
     */
    this.highlight = function() {
      let x = this.j * w;
      let y = this.i * w;
      noStroke();
      fill(51, 82, 80);
        square(x, y, w);
    }



    /**         METHOD
     * 
     * draws the walls of the cell as lines
     */
    this.show = function () {
      let x = this.j*w;  // x position
      let y = this.i*w;  // y position

      stroke(255);                                    // color of outlines (walls)

      if (this.walls[0]) {
        line(x        , y        , x + w   , y);        // top wall
      }
    
      if (this.walls[1]) {
        line(x + w    , y        , x + w   , y + w);    // right wall
      }

      if (this.walls[2]) {
        line(x + w    , y + w    , x       , y + w);    // bottom wall
      }
      
      if (this.walls[3]) {
        line(x        , y + w    , x       , y);        // left wall
      }

           
      if (this.visited) {  
        noStroke();                   // if cell is visited, color green
        fill(41, 232, 124);
        square(x, y, w);

      }
    }



    /**         METHOD
     * 
     *  this method returns a random neighbor from the cell, 
     * which hasnt been visited yet
     */
    this.selectNeighbor = function () {
      let neighbors = [];                                             // neighbors array to pick from randomly

      let top, right, bottom, left;
      
      if (i - 1 >= 0 && !grid[i - 1] [j].visited) {
        top = grid[i - 1] [j];
        neighbors.push(top);                              // pushing top cell
      }

      if (j + 1 < rows && !grid[i] [j + 1].visited) {
        right = grid[i] [j + 1];
        neighbors.push(right);                                 // pushing right cell
      }

      if (i + 1 < columns && !grid[i + 1] [j].visited) {
        bottom = grid[i + 1] [j];
        neighbors.push(bottom);                              // pushing bottom cell
      }

      if (j - 1 >= 0 && !grid[i] [j - 1].visited) {
        left = grid[i] [j - 1];
        neighbors.push(left);                              // pushing left cell
      }

      if (neighbors.length > 0) {                                     // check if neighbors exist
        let r = floor(random(0, neighbors.length));                   // choose a random number in range of neighbo.length
       
        return neighbors[r];                                          // return random neighbor
      } else {
        return undefined;                                             // else return undefined
      }
    }



  };